import { ProductType } from "src/types/Product";

export interface StateProps {
    itemsCount: number;
    selectedProduct?: ProductType;
}
export interface OwnProps {
    children?: JSX.Element[];
}

export type LayoutProperties = StateProps & OwnProps;
