import Categories from "@components/categories/categories.component";
import Layout from "@components/layout/layout.component";
import ProductModal from "@components/product-modal/product-modal.component";
import React, { PureComponent } from "react";
import ViewedProducts from "@components/viewed-products/viewed-products.component";
class Main extends PureComponent<unknown, unknown> {
    public render(): JSX.Element {
        return (
            <Layout>
                <Categories />
                <ViewedProducts />
                <ProductModal />
            </Layout>
        );
    }
}

export default Main;
