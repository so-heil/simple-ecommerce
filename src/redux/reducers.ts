import { combineReducers } from "redux";

import counter from "src/redux/slices/counter";
import products from "src/redux/slices/products";
import cart from "src/redux/slices/cart";
const rootReducer = combineReducers({ counter, products, cart });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
