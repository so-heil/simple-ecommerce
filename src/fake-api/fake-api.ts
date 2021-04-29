import { ProductType } from "src/types/Product";
import products from "../data/products.json";
import categories from "../data/categories.json";
export const getProducts = async () =>
    new Promise<ProductType[]>((resolve, reject) => {
        return setTimeout(() => resolve(products), 1000);
    });

export const getCategories = async () =>
    new Promise<string[]>((resolve, reject) => {
        return setTimeout(() => resolve(categories), 1000);
    });
