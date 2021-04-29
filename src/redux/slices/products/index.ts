import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "src/types/Product";

interface IProducts {
    selectedProduct?: ProductType;
    viewed: ProductType[];
}

const initialState: IProducts = {
    viewed: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        selectProduct: (state, action: PayloadAction<ProductType>) => {
            if (state.selectedProduct) {
                state.viewed.unshift(state.selectedProduct);
            }
            state.selectedProduct = action.payload;
        },
        unselectProduct: (state) => {
            if (state.selectedProduct) {
                state.viewed.unshift(state.selectedProduct);
            }
            state.selectedProduct = undefined;
        },
    },
});

export const { selectProduct, unselectProduct } = productsSlice.actions;

export default productsSlice.reducer;
