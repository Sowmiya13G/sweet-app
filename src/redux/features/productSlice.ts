import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api-services/apiClient';
import { API_ENDPOINTS } from '../../api-services/endPoints';
import { Product } from '../../products-type/productTypes'; 

interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await apiClient.get<Product[]>(API_ENDPOINTS.PRODUCTS);
    return response.data; 
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  } as ProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null; 
      });
  },
});

export default productsSlice.reducer;
