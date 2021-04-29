import { CartItem } from "src/redux/slices/cart";
import { ProductType } from "src/types/Product";

export interface StateProps {
    selectedProduct?: ProductType;
}
export interface DispatchProps {
    selectProduct: (product: ProductType) => void;
    unselectProduct: () => void;
    addToCart: (item: CartItem) => void;
}

export type ProductModalProperties = StateProps & DispatchProps;
