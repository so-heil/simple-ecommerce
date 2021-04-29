import Categories from "src/components/categories/categories.component";
import Layout from "src/components/layout/layout.component";

import React, { PureComponent } from "react";
import ViewedProducts from "src/components/viewed-products/viewed-products.component";
import "./styles/global.css";
class App extends PureComponent<unknown, unknown> {
    public render(): JSX.Element {
        return (
            <Layout>
                <Categories />
                <ViewedProducts />
            </Layout>
        );
    }
}

export default App;
