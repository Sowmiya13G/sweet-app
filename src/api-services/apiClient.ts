import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create Axios instance
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercept the request to add the token to the headers
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Handle response globally
apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - possibly invalid token');
        }
        return Promise.reject(error);
    }
);

// Utility function for making API requests
export const apiRequest = async (options: InternalAxiosRequestConfig): Promise<AxiosResponse<any>> => {
    try {
        const response = await apiClient(options);
        return response.data; 
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("API Request Error:", error.message);
            if (error.response) {
                console.error("Response Data:", error.response.data);
                console.error("Response Status:", error.response.status);
            }
        } else if (error instanceof Error) {
            console.error("General Error:", error.message);
        } else {
            console.error("Unknown Error", error);
        }
        throw error; 
    }
};

export default apiClient;
