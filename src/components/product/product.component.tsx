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
class Product extends PureComponent<
    ProductProperties,
    {
        hovered: boolean;
    }
> {
    public constructor(props: ProductProperties) {
        super(props);
        this.state = {
            hovered: false,
        };
    }

    public render(): JSX.Element {
        const product = this.props.product;
        return (
            <div
                onClick={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                className={classNames(
                    "bg-white mx-2 py-6 px-6 rounded-3xl flex transition-all duration-200 cursor-pointer prod",
                    { "mr-10": this.state.hovered },
                )}
            >
                <div>
                    <img
                        src={product.photo}
                        alt={product.name}
                        className="object-contain h-60 -mt-36 mb-5 rounded-md"
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
                        <p className="w-36 text-sm text-gray-500 mb-2">
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
