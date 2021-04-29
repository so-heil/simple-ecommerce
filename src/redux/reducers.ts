import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import products from "@redux/slices/products";

const rootReducer = combineReducers({ counter, products });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
