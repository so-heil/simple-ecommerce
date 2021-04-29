import { ProductType } from "src/types/Product";

export interface StateProps {
    viewedProducts: ProductType[];
}
export interface DispatchProps {}
export interface OwnProps {}
export type ViewedProductsProperties = StateProps & DispatchProps & OwnProps;
