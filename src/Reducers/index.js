import { combineReducers } from "redux";
import { GetProducts } from "./Get-Products";
import { GetProductById } from "./Get-Products-By-Id";

let rootReducers = combineReducers({
    productList:GetProducts
    // productById : GetProductById
})

export default rootReducers