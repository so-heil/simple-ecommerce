import { ViewedProductProperties } from "./viewed-product.properties";
import React, { PureComponent } from "react";

class ViewedProduct extends PureComponent<ViewedProductProperties, unknown> {
    public constructor(props: ViewedProductProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className="flex items-center">
                <img
                    src="/chair.png"
                    className="object-contain h-40 mr-5"
                    alt=""
                />
                <div className="text-white">
                    <p>Fucking now</p>
                    <span className="font-bold">$210</span>
                </div>
            </div>
        );
    }
}

export default ViewedProduct;
