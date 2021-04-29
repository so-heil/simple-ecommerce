import { CartProperties, DispatchProps, StateProps } from "./cart.properties";
import { PureComponent } from "react";
import CartProduct from "../cart-product/cart-product.component";
import { connect } from "react-redux";
import { AppState } from "src/redux/store";
import { removeFromCart, addToCart } from "src/redux/slices/cart";
import { IoMdArrowBack } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
class Cart extends PureComponent<CartProperties, unknown> {
    public render(): JSX.Element {
        const total = this.props.cartItems
            .map((item) => item.quantity * item.product.price)
            .reduce((total, price) => total + price, 0);
        const {
            cartItems,
            removeFromCart,
            addToCart,
            onClose,
            isOpen,
        } = this.props;

        return (
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="cart"
                mountOnEnter
                unmountOnExit
            >
                <aside
                    className="z-50 md:w-80 rounded-r-3xl fixed pb-24 cart"
                    style={{
                        left: 0,
                        top: 5,
                        bottom: 5,
                    }}
                >
                    <button
                        className="absolute opacity-50 hover:opacity-100 text-3xl p-2 z-50"
                        style={{ top: 32, left: 10 }}
                        onClick={onClose}
                    >
                        <IoMdArrowBack />
                    </button>

                    {cartItems.length > 0 ? (
                        <div className="overflow-y-auto h-full">
                            <div className="w-full space-y-5 p-5">
                                {cartItems.map((item, i) => (
                                    <CartProduct
                                        key={`cart-item-product-${item.product.name}-${item.product.id}-${i}`}
                                        cartItem={item}
                                        onRemove={removeFromCart}
                                        onChange={addToCart}
                                    />
                                ))}
                            </div>
                            <h3 className="text-white text-xl pt-4 mx-4 border-t-2 border-gray-300 font-light flex justify-between">
                                Total:
                                <span className="font-bold">${total}</span>
                            </h3>
                            <button
                                className="w-full py-8 text-white text-xl font-bold bg-accent-light absolute rounded-br-3xl"
                                style={{ bottom: 0 }}
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    ) : (
                        <div className="w-full h-full flex justify-center items-center">
                            <p className="text-sm text-gray-500 font-semibold">
                                No items in your cart!
                            </p>
                        </div>
                    )}
                </aside>
            </CSSTransition>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    cartItems: state.cart.cartItems ?? [],
});

const mapDispatchToProps: DispatchProps = {
    removeFromCart,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
