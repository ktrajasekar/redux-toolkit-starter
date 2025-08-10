import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState, Product } from "../types/cart";

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const existingItem = state.items.find(
                item => item.product.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ product, quantity: 1 });
            }
        }
    }

});

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectTotalCartValue = (state: { cart: CartState }) =>
    state.cart.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer;