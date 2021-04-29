import { CartItem } from "src/redux/slices/cart";

export interface CartProductProperties {
    cartItem: CartItem;
    onRemove: (id: number) => void;
    onChange: (item: CartItem) => void;
}
