import { CategoriesProperties } from "./categories.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";
import Product from "@components/product/product.component";

class Categories extends PureComponent<CategoriesProperties, unknown> {
    public constructor(props: CategoriesProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        const categories = ["Beds", "Chairs", "All"];
        return (
            <div>
                <ul className="flex items-center mt-10">
                    {categories.map((category, i) => {
                        const isLast = i === categories.length - 1;
                        return (
                            <li
                                className={classNames(
                                    "text-xl mr-5 text-white opacity-50",
                                    { "ml-20": isLast },
                                )}
                            >
                                {category}
                            </li>
                        );
                    })}
                </ul>
                <div className="flex pt-40 overflow-x-auto">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        );
    }
}

export default Categories;
