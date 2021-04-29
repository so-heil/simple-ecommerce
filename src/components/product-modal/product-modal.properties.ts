import { ProductType } from "src/types/Product";

export interface StateProps {
    selectedProduct?: ProductType;
}
export interface DispatchProps {
    selectProduct: (product: ProductType) => void;
    unselectProduct: () => void;
}
export interface OwnProps {}
export type ProductModalProperties = StateProps & DispatchProps & OwnProps;
