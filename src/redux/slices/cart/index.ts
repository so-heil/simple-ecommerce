import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "src/types/Product";

export interface CartItem {
    product: ProductType;
    selectedColor: string;
    quantity: number;
}

interface ICart {
    cartItems: CartItem[];
}

const initialState: ICart = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const oldItemIndex = state.cartItems.findIndex(
                (item) => item.product.id === action.payload.product.id,
            );
            console.log(oldItemIndex);
            if (oldItemIndex !== -1) {
                const oldItem = state.cartItems[oldItemIndex];
                const updatedItem: CartItem = {
                    ...oldItem,
                    quantity: action.payload.quantity,
                    selectedColor: action.payload.selectedColor,
                };
                state.cartItems[oldItemIndex] = updatedItem;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.product.id !== action.payload,
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
