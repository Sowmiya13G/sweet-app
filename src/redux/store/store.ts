import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productSlice';
import carouselReducer from '../features/carouselSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    carousel: carouselReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 

export default store;
