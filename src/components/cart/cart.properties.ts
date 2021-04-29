import { CartItem } from "src/redux/slices/cart";

export interface StateProps {
    cartItems: CartItem[];
}
export interface DispatchProps {
    removeFromCart: (id: number) => void;
    addToCart: (item: CartItem) => void;
}

export interface OwnProps {
    isOpen: boolean;
    onClose: () => void;
}
export type CartProperties = StateProps & DispatchProps & OwnProps;
