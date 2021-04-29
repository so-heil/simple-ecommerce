import {
    StateProps,
    ViewedProductsProperties,
} from "./viewed-products.properties";
import React, { PureComponent } from "react";
import ViewedProduct from "src/components/viewed-product/viewed-product.component";
import { connect } from "react-redux";
import { AppState } from "src/redux/store";

class ViewedProducts extends PureComponent<ViewedProductsProperties, unknown> {
    public constructor(props: ViewedProductsProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div>
                <h2 className="text-white text-2xl mt-20 font-bold">
                    Previously viewed
                </h2>
                <div className="bg-accent-dark mt-10 p-6 rounded-3xl flex items-center space-x-20 overflow-x-auto">
                    {this.props.viewedProducts.map((product) => (
                        <ViewedProduct product={product} />
                    ))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: AppState): StateProps => ({
    viewedProducts: state.products.viewed,
});

export default connect(mapStateToProps)(ViewedProducts);
