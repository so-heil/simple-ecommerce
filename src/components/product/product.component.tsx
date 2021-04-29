import {
    DispatchProps,
    ProductProperties,
    StateProps,
} from "./product.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { AppState } from "src/redux/store";
import { connect } from "react-redux";
import { selectProduct } from "src/redux/slices/products";
import Skeleton from "react-loading-skeleton";
class Product extends PureComponent<
    ProductProperties,
    {
        hovered: boolean;
        imageLoading: boolean;
    }
> {
    public constructor(props: ProductProperties) {
        super(props);
        this.state = {
            hovered: false,
            imageLoading: true,
        };
    }

    public render(): JSX.Element {
        const product = this.props.product;
        return (
            <div
                onClick={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                className={classNames(
                    "bg-white bg-opacity-50 mx-2 py-6 px-6 rounded-3xl flex transition-all duration-200 cursor-pointer flex-shrink-0",
                    { "mr-10": this.state.hovered },
                )}
            >
                <div>
                    {this.state.imageLoading && (
                        <div className="-mt-36 mb-5">
                            <Skeleton height={210} width={180} />
                        </div>
                    )}
                    <img
                        src={product.photo}
                        alt={product.name}
                        onLoad={() => this.setState({ imageLoading: false })}
                        className={classNames(
                            "object-contain mb-5 rounded-md",
                            {
                                "max-w-0 opacity-0 max-h-0": this.state
                                    .imageLoading,
                                "h-60 opacity-100 -mt-36": !this.state
                                    .imageLoading,
                            },
                        )}
                    />
                    <p className="text-xl text-accent mt-auto">
                        {product.name}
                    </p>
                    <span className="text-lg font-bold">${product.price}</span>
                    <div className="mt-4 flex items-center space-x-2">
                        {product.colors.map((color) => (
                            <div
                                className="w-6 h-6 rounded-full"
                                style={{ background: color }}
                            />
                        ))}
                    </div>
                </div>
                <CSSTransition
                    in={this.state.hovered}
                    timeout={500}
                    classNames="product"
                    unmountOnExit
                    mountOnEnter
                >
                    <div className="flex flex-col items-start">
                        <p className="w-36 text-sm text-black mb-2">
                            {product.description ??
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati laudantium corporis iste"}
                        </p>
                        <button
                            className="mt-auto bg-accent-dark py-2 px-6 text-white rounded-xl w-full font-semibold"
                            onClick={() => this.props.selectProduct(product)}
                        >
                            BUY NOW
                        </button>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}
const mapStateToProps = (state: AppState): StateProps => ({
    selectedProduct: state.products.selectedProduct,
});

const mapDispatchToProps: DispatchProps = { selectProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
