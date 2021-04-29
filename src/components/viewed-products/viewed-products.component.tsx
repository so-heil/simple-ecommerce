import {
    StateProps,
    ViewedProductsProperties,
} from "./viewed-products.properties";
import React, { PureComponent } from "react";
import ViewedProduct from "src/components/viewed-product/viewed-product.component";
import { connect } from "react-redux";
import { AppState } from "src/redux/store";

class ViewedProducts extends PureComponent<ViewedProductsProperties, unknown> {
    public render(): JSX.Element {
        return (
            <div className="mb-8">
                <h2 className="text-white text-2xl mt-20 font-bold px-5 md:px-0">
                    Previously viewed
                </h2>
                <div className="bg-accent-dark mt-10 p-6 rounded-3xl flex items-center space-x-20 overflow-x-auto mx-2 md:mx-0">
                    {this.props.viewedProducts.length > 0 ? (
                        this.props.viewedProducts.map((product, i) => (
                            <ViewedProduct
                                product={product}
                                key={`viewed-product:${product.name}+${product.id}->${i}`}
                            />
                        ))
                    ) : (
                        <p className="text-gray-400 m-auto">
                            Products you view would appear here.
                        </p>
                    )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: AppState): StateProps => ({
    viewedProducts: state.products.viewed,
});

export default connect(mapStateToProps)(ViewedProducts);
