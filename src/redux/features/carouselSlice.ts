import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api-services/apiClient';
import { API_ENDPOINTS } from '../../api-services/endPoints';
import { Carousel } from '../../products-type/productTypes';

interface CarouselState {
  items: Carousel[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchCarouselItems = createAsyncThunk<Carousel[]>(
  'carousel/fetchCarouselItems',
  async () => {
    const response = await apiClient.get<Carousel[]>(API_ENDPOINTS.CAROUSEL);
    return response.data;
  }
);

const carouselSlice = createSlice({
  name: 'carousel',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  } as CarouselState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarouselItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarouselItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCarouselItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default carouselSlice.reducer;
