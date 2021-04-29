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

class ProductModal extends PureComponent<ProductModalProperties, unknown> {
    private btnClassname =
        "bg-white w-10 h-10 flex justify-center items-center text-2xl";

    public constructor(props: ProductModalProperties) {
        super(props);
        this.state = {};
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
                            onClick={unselectProduct}
                        />
                        <div className="flex items-center">
                            <img
                                src={product?.photo}
                                alt=""
                                className="object-contain h-96 w-72 mr-10 p-4"
                            />
                            <div>
                                <div className="bg-gray-800 w-6 h-6 rounded-full" />
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
                                <div className="text-black flex">
                                    <button
                                        className={classNames(
                                            this.btnClassname,
                                            "rounded-l-xl",
                                        )}
                                    >
                                        <AiOutlineMinus />
                                    </button>
                                    <span
                                        className={classNames(
                                            this.btnClassname,
                                            "font-bold",
                                        )}
                                    >
                                        1
                                    </span>
                                    <button
                                        className={classNames(
                                            this.btnClassname,
                                            "rounded-r-xl",
                                        )}
                                    >
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-8 text-white text-xl font-bold bg-accent-light mt-5">
                            ADD TO SHOPPING CART
                        </button>
                    </aside>
                </>
            </CSSTransition>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    selectedProduct: state.products.selectedProduct,
});

const mapDispatchToProps: DispatchProps = { selectProduct, unselectProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
