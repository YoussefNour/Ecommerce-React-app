import { combineReducers } from "redux";
import { CreateNewProduct } from "./Products/Create-Product";
import { GetProducts } from "./Products/Get-Products";
import { GetProductId } from "./Products/Get-Products-By-Id";


let rootReducers = combineReducers({
    productList:GetProducts,
    GetProduct : GetProductId,
    CreateProduct : CreateNewProduct
})

export default rootReducers