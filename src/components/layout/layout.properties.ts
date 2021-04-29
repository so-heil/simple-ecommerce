export interface StateProps {
    itemsCount: number;
}
export interface DispatchProps {}
export interface OwnProps {
    children?: JSX.Element[];
}

export type LayoutProperties = StateProps & OwnProps & DispatchProps;
