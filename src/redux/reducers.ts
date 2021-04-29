import { combineReducers } from "redux";

import counter from "src/redux/slices/counter";
import products from "src/redux/slices/products";

const rootReducer = combineReducers({ counter, products });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
