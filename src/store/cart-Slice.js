import { createSlice } from "@reduxjs/toolkit";

const cartState = { items: [], quantity: 0 };

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const itemIdx = state.items.find((it) => it.id === newItem.id);
            if (!itemIdx) {
                state.items.push({
                    title: newItem.title,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
                state.quantity++;
            } else {
                itemIdx.quantity++;
                itemIdx.totalPrice += itemIdx.price
                state.quantity++;
            }
        },
        removeFromCart: (state, action) => {
            const remItem = state.items.find((it) => it.id === action.payload);
            if (remItem.quantity === 1) {
                state.items = state.items.filter((it) => it.id !== action.payload);
                state.quantity--;
            } else {
                remItem.quantity--;
                remItem.totalPrice -= remItem.price;
                state.quantity--;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;