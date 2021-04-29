import classNames from "classnames";
import React, { Fragment, PureComponent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import {
    DispatchProps,
    ProductModalProperties,
    StateProps,
} from "./product-modal.properties";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AppState } from "src/redux/store";
import { selectProduct, unselectProduct } from "src/redux/slices/products";
import { connect } from "react-redux";
import Quantity from "../quantity/quantity.component";
import { addToCart } from "src/redux/slices/cart";
class ProductModal extends PureComponent<
    ProductModalProperties,
    {
        selectedColor?: string;
        quantity: number;
        caption: string;
    }
> {
    public constructor(props: ProductModalProperties) {
        super(props);
        this.state = {
            quantity: 1,
            caption: "ADD TO SHOPPING CART",
        };
    }

    public render(): JSX.Element {
        const { unselectProduct, selectedProduct: product } = this.props;
        const filledStars = Array.from(Array(product?.rating).keys());
        const emptyStars = product?.rating
            ? Array.from(Array(5 - product?.rating).keys())
            : [];
        return (
            <CSSTransition
                in={!!product}
                timeout={300}
                classNames="modal"
                mountOnEnter
                unmountOnExit
            >
                <>
                    <aside
                        className="absolute z-20 w-96 bg-accent-light product-modal overflow-y-auto relative"
                        style={{
                            right: 10,
                            top: 10,
                            bottom: 10,
                            position: "fixed",
                        }}
                    >
                        <AiOutlineClose
                            className="mt-5 ml-5 text-3xl absolute text-gray-300 hover:text-white transition cursor-pointer"
                            onClick={this.close}
                        />
                        <div className="flex items-center">
                            <img
                                src={product?.photo}
                                alt=""
                                className="object-contain h-96 w-72 mr-10 p-4"
                            />
                            <div className="flex flex-col space-y-4">
                                {product?.colors.map((color) =>
                                    this.renderColor(color),
                                )}
                            </div>
                        </div>
                        <div className="px-10 text-white text-3xl">
                            <h3>{product?.name}</h3>
                            <div className="flex mt-5">
                                <span className="font-bold text-3xl flex-1">
                                    ${product?.price}
                                </span>
                                <div className="flex text-2xl items-center">
                                    {filledStars.map(() => (
                                        <AiFillStar />
                                    ))}
                                    {emptyStars.map(() => (
                                        <AiOutlineStar />
                                    ))}
                                </div>
                            </div>
                            <p className="text-lg text-white mt-8">
                                {product?.description ??
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita exercitationem quia blanditiis, earum vel laboriosam omnis perspiciatis!"}
                            </p>
                            <div className="flex justify-between items-center mt-8">
                                <p className="text-lg text-gray-100 flex justify-between">
                                    Quantity
                                </p>
                                <Quantity
                                    className="bg-white h-10 w-10 text-2xl"
                                    value={this.state.quantity}
                                    onChange={(quantity) =>
                                        this.setState({ quantity })
                                    }
                                    onZero={this.props.unselectProduct}
                                />
                            </div>
                        </div>
                        <button
                            className="w-full py-8 text-white text-xl font-bold bg-accent-light mt-5"
                            onClick={this.addToCart}
                        >
                            {this.state.caption}
                        </button>
                    </aside>
                </>
            </CSSTransition>
        );
    }
    private close = () => {
        this.setState({ caption: "ADD TO CART", quantity: 1 });
        this.props.unselectProduct();
    };

    private renderColor = (color: string): JSX.Element => {
        const isSelected = color === this.state.selectedColor;
        return (
            <div
                className={classNames(
                    "p-1 rounded-full  opacity-50 hover:opacity-100 transition cursor-pointer",
                    { "border border-gray-400 opacity-100": isSelected },
                )}
                onClick={() => this.setState({ selectedColor: color })}
            >
                <div
                    className="w-5 h-5 rounded-full"
                    style={{ background: color }}
                />
            </div>
        );
    };

    private addToCart = () => {
        const { selectedColor, quantity } = this.state;
        if (!selectedColor) {
            this.setState({ caption: "PLEASE SELECT A COLOR" });
            return;
        } else if (quantity && this.props.selectedProduct) {
            this.props.addToCart({
                product: this.props.selectedProduct,
                quantity,
                selectedColor,
            });
            this.setState({ caption: "SUCCESSFULLY ADDED TO CART" });
        }
    };
}

const mapStateToProps = (state: AppState): StateProps => ({
    selectedProduct: state.products.selectedProduct,
});

const mapDispatchToProps: DispatchProps = {
    selectProduct,
    unselectProduct,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
