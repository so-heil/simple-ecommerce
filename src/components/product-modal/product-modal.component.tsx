import classNames from "classnames";
import React, { PureComponent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import { ProductModalProperties } from "./product-modal.properties";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
class ProductModal extends PureComponent<ProductModalProperties, unknown> {
    private btnClassname =
        "bg-white w-10 h-10 flex justify-center items-center text-2xl";

    public constructor(props: ProductModalProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        const { onClose, isOpen, className } = this.props;
        return (
            <CSSTransition
                in={isOpen}
                timeout={100}
                classNames="fade"
                unmountOnExit
            >
                <>
                    <aside
                        className={classNames(
                            "absolute z-20 w-96 bg-accent-light product-modal overflow-y-auto",
                            className,
                        )}
                        style={{
                            right: 10,
                            top: 10,
                            bottom: 10,
                            position: "fixed",
                        }}
                    >
                        <div className="flex items-center">
                            <img
                                src="/chair.png"
                                alt=""
                                className="object-contain h-96 w-72 mr-10 p-4"
                            />
                            <div>
                                <div className="bg-gray-800 w-6 h-6 rounded-full" />
                            </div>
                        </div>
                        <div className="px-10 text-white text-3xl">
                            <h3>Some product</h3>
                            <div className="flex mt-5">
                                <span className="font-bold text-3xl flex-1">
                                    $280
                                </span>
                                <div className="flex text-2xl items-center">
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                            </div>
                            <p className="text-lg text-white mt-8">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo expedita
                                exercitationem quia blanditiis, earum vel
                                laboriosam omnis perspiciatis! Aspernatur ullam
                                inventore nihil voluptatem amet blanditiis
                                distinctio quidem dolorem quia ab?
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

export default ProductModal;
