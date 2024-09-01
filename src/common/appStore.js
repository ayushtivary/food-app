import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Ensure the correct path

const appStore = configureStore({
    reducer: {
        cart: cartReducer,  // Make sure this key matches your slice name
    },
});

export default appStore;
