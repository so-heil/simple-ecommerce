import { CartProductProperties } from "./cart-product.properties";
import React, { PureComponent } from "react";
import Quantity from "../quantity/quantity.component";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";

class CartProduct extends PureComponent<CartProductProperties, unknown> {
    public constructor(props: CartProductProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        const { cartItem, onRemove, onChange } = this.props;
        return (
            <div className="py-6 rounded-3xl flex transition-all duration-200 flex-shrink-0">
                <img
                    src={cartItem.product.photo}
                    alt={cartItem.product.name}
                    className={classNames("object-contain w-1/2 mb-5 max-h-40")}
                />
                <div className="ml-5">
                    <p className="text-xl text-accent">
                        {cartItem.product.name}
                    </p>
                    <span className="text-lg font-bold">
                        ${cartItem.product.price}
                    </span>
                    <div className="mt-4 flex items-center space-x-2 mb-4">
                        <div
                            className="w-6 h-6 rounded-full"
                            style={{ background: cartItem.selectedColor }}
                        />
                    </div>
                    <Quantity
                        className="bg-accent text-white w-8 h-8 text-xl"
                        value={this.props.cartItem.quantity}
                        onZero={() => this.props.onRemove(cartItem.product.id)}
                        onChange={this.updateItem}
                    />
                </div>
            </div>
        );
    }

    private updateItem = (quantity: number) => {
        this.props.onChange({
            ...this.props.cartItem,
            quantity,
        });
    };
}

export default CartProduct;
