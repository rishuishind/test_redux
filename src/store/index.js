import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './ui-slice';
import cartSlice from './cart-Slice';

const store = configureStore({
    reducer: { ui: toggleSlice.reducer, cart: cartSlice.reducer }
});
export default store;