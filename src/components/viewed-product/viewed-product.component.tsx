import { ViewedProductProperties } from "./viewed-product.properties";
import React, { PureComponent } from "react";

class ViewedProduct extends PureComponent<ViewedProductProperties, unknown> {
    public constructor(props: ViewedProductProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        const product = this.props.product;
        return (
            <div className="flex items-center flex-shrink-0">
                <img
                    src={product.photo}
                    className="object-contain h-40 mr-5"
                    alt=""
                />
                <div className="text-white">
                    <p>{product.name}</p>
                    <span className="font-bold">${product.price}</span>
                </div>
            </div>
        );
    }
}

export default ViewedProduct;
