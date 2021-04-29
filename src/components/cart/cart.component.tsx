import { CartProperties, DispatchProps, StateProps } from "./cart.properties";
import React, { PureComponent } from "react";
import CartProduct from "../cart-product/cart-product.component";
import { connect } from "react-redux";
import { AppState } from "src/redux/store";
import { removeFromCart, addToCart } from "src/redux/slices/cart";
import classNames from "classnames";
import { IoMdArrowBack } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
class Cart extends PureComponent<CartProperties, unknown> {
    public constructor(props: CartProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
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
                    // className={classNames(
                    //     "h-screen bg-white md:w-96 rounded-r-3xl transition-all duration-200 fixed md:relative pb-16",
                    //     {
                    //         "ml-0": this.props.isOpen,
                    //         "-ml-96": !this.props.isOpen,
                    //     },
                    // )}
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
                        <>
                            <div className="w-full space-y-5 p-5 overflow-y-auto h-full">
                                {cartItems.map((item) => (
                                    <CartProduct
                                        cartItem={item}
                                        onRemove={removeFromCart}
                                        onChange={addToCart}
                                    />
                                ))}
                            </div>
                            <button
                                className="w-full py-8 text-white text-xl font-bold bg-accent-light absolute rounded-br-3xl"
                                style={{ bottom: 0 }}
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </>
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
