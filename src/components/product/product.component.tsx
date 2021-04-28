import { ProductProperties } from "./product.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

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
        return (
            <div
                onClick={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                className={classNames(
                    "bg-white mx-2 py-6 px-6 rounded-3xl flex transition-all duration-200 cursor-pointer flex-shrink-0",
                    { "mx-10": this.state.hovered },
                )}
            >
                <div>
                    <img
                        src="/chair.png"
                        alt=""
                        className="object-contain h-60 -mt-36 mb-5 rounded-md"
                    />
                    <p className="text-xl text-accent mt-auto">Fucking Shoe</p>
                    <span className="text-lg font-bold">$320</span>
                    <div className="mt-4">
                        <div className="bg-gray-800 w-6 h-6 rounded-full" />
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro obcaecati laudantium corporis iste
                            expedita! Veniam numquam distinctio,
                        </p>
                        <button className="mt-auto bg-accent-dark py-2 px-6 text-white rounded-xl w-full font-semibold">
                            BUY NOW
                        </button>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default Product;
