import { ProductType } from "src/types/Product";

export interface StateProps {
    selectedProduct?: ProductType;
}
export interface DispatchProps {
    selectProduct: (product: ProductType) => void;
}

export interface OwnProps {
    product: ProductType;
}
export type ProductProperties = StateProps & DispatchProps & OwnProps;
