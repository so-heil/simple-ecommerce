import {
    DispatchProps,
    LayoutProperties,
    StateProps,
} from "./layout.properties";
import React, { PureComponent } from "react";
import { CgMenuLeft } from "react-icons/cg";
import Logo from "src/components/logo/logo.component";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import Cart from "../cart/cart.component";
import { connect } from "react-redux";
import { AppState } from "src/redux/store";
import classNames from "classnames";
import ProductModal from "src/components/product-modal/product-modal.component";
import { CSSTransition } from "react-transition-group";
class Layout extends PureComponent<
    LayoutProperties,
    {
        isCartOpen: boolean;
    }
> {
    public constructor(props: LayoutProperties) {
        super(props);
        this.state = {
            isCartOpen: false,
        };
    }

    public render(): JSX.Element {
        const isCartEmpty = this.props.itemsCount === 0;
        const selectedProduct = this.props.selectedProduct;
        return (
            <main className="flex bg-accent">
                <Cart
                    isOpen={this.state.isCartOpen}
                    onClose={() => this.setState({ isCartOpen: false })}
                />
                <div className="md:px-10 w-full">
                    <header className="flex items-center justify-between mt-8 px-4 md:px-0">
                        <Logo />

                        <div
                            className={classNames(
                                "p-2 rounded-xl z-40 cursor-pointer flex transition",
                                {
                                    "bg-black scale-105 text-white": !isCartEmpty,
                                    "bg-white": isCartEmpty,
                                },
                            )}
                            onClick={() =>
                                this.setState((state) => ({
                                    isCartOpen: !state.isCartOpen,
                                }))
                            }
                        >
                            <IoBagOutline
                                className={classNames(
                                    "text-2xl transition-all",
                                    {
                                        "mr-4": !isCartEmpty,
                                    },
                                )}
                            />
                            {this.props.itemsCount > 0 && this.props.itemsCount}
                        </div>
                    </header>
                    <h1 className="text-white text-4xl mt-20 font-light px-4 md:px-0">
                        <strong className="font-extrabold">Best quality</strong>{" "}
                        ever.
                    </h1>
                    {this.props.children}
                </div>
                <CSSTransition
                    in={!!selectedProduct}
                    timeout={300}
                    classNames="modal"
                    mountOnEnter
                    unmountOnExit
                >
                    <ProductModal
                        key={`selected-product-${selectedProduct?.name}${selectedProduct?.id}${this.props.itemsCount}`}
                    />
                </CSSTransition>
            </main>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    itemsCount: state.cart.cartItems.length,
    selectedProduct: state.products.selectedProduct,
});

const mapDispatchToProps: DispatchProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
