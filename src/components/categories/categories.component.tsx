import { CategoriesProperties } from "./categories.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";
import { getCategories, getProducts } from "src/fake-api/fake-api";
import Product from "src/components/product/product.component";
import { ProductType } from "src/types/Product";

class Categories extends PureComponent<
    CategoriesProperties,
    {
        loading: boolean;
        products?: ProductType[];
        categories: string[];
        selectedCategory: string;
    }
> {
    public constructor(props: CategoriesProperties) {
        super(props);
        this.state = {
            loading: false,
            categories: [],
            selectedCategory: "all",
        };
    }
    public componentDidMount(): void {
        this.getData();
    }

    public render(): JSX.Element {
        const {
            products: allProducts,
            categories,
            selectedCategory,
        } = this.state;
        const products =
            selectedCategory === "all"
                ? allProducts
                : allProducts?.filter(
                      (product) => product.category === selectedCategory,
                  );
        return (
            <div>
                <ul className="flex items-center mt-10">
                    {categories.map((category) => {
                        const isAll = category === "all";
                        const isSelected = category === selectedCategory;
                        return (
                            <li
                                onClick={() =>
                                    this.setState({
                                        selectedCategory: category,
                                    })
                                }
                                className={classNames(
                                    "text-xl mr-5 text-white opacity-50 hover:opacity-100 transition cursor-pointer",
                                    { "ml-20": isAll },
                                    { "opacity-100": isSelected },
                                )}
                            >
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </li>
                        );
                    })}
                </ul>
                <div className="flex pt-40 overflow-x-auto">
                    {products
                        ? products.map((product) => (
                              <Product product={product} />
                          ))
                        : "loading"}
                </div>
            </div>
        );
    }

    private getData = async () => {
        this.setState({ loading: true });
        const products = await getProducts();
        const categories = await getCategories();
        this.setState({
            loading: false,
            products,
            categories: [...categories, "all"],
        });
    };
}

export default Categories;
