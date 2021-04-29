import { combineReducers } from "redux";

import products from "src/redux/slices/products";
import cart from "src/redux/slices/cart";
const rootReducer = combineReducers({ products, cart });

export default rootReducer;
