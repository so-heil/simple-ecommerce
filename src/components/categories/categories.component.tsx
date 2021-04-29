import { CategoriesProperties } from "./categories.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";
import { getCategories, getProducts } from "src/fake-api/fake-api";
import Product from "src/components/product/product.component";
import { ProductType } from "src/types/Product";
import Skeleton from "react-loading-skeleton";
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
                {this.state.loading ? (
                    this.renderLoader()
                ) : (
                    <div className="flex md:flex-col">
                        <ul className="flex items-center mt-10 flex-col md:flex-row px-5 md:px-0">
                            {categories.map((category) => {
                                const isAll = category === "all";
                                const isSelected =
                                    category === selectedCategory;
                                return (
                                    <li
                                        onClick={() =>
                                            this.setState({
                                                selectedCategory: category,
                                            })
                                        }
                                        className={classNames(
                                            "text-xl mt-5 md:mt-0 md:mr-5 text-white opacity-50 hover:opacity-100 transition cursor-pointer menu-item",
                                            { "mt-20 md:ml-20 md:mt-0": isAll },
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
                                : "error"}
                        </div>
                    </div>
                )}
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

    private renderLoader = () => {
        const products = Array.from(Array(6).keys());
        const categories = Array.from(Array(4).keys());
        return (
            <div className="mt-10">
                <div className="flex space-x-6">
                    {categories.map(() => (
                        <Skeleton width={80} />
                    ))}
                </div>
                <div className="flex space-x-5 overflow-x-auto">
                    {products.map(() => {
                        const width = 150 + Math.random() * 200;
                        return (
                            <div className="flex flex-col mt-10 flex-shrink-0">
                                <Skeleton width={width} height={190} />
                                <Skeleton width={120} className="mt-4" />
                                <Skeleton width={60} />
                                <div className="flex space-x-2 mt-4">
                                    <Skeleton circle width={25} height={25} />
                                    <Skeleton circle width={25} height={25} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
}

export default Categories;
