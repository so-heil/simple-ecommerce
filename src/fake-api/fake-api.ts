import { ProductType } from "src/types/Product";
import products from "../data/products.json";
import categories from "../data/categories.json";
export const getProducts: () => Promise<ProductType[]> = async () =>
    new Promise<ProductType[]>((resolve) => {
        return setTimeout(() => resolve(products), 1000);
    });

export const getCategories: () => Promise<string[]> = async () =>
    new Promise<string[]>((resolve) => {
        return setTimeout(() => resolve(categories), 1000);
    });
