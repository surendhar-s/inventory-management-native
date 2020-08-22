import { combineReducers } from "redux";
import productListReducer from "./productListReducer";
import categoryListReducer from "./categoryListReducer";
const reducers = combineReducers({
    productList: productListReducer,
    categoryList: categoryListReducer
})

export default reducers