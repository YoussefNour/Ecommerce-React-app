import { combineReducers } from "redux";
import { CreateNewProduct } from "./Products/Create-Product";
import { GetProducts } from "./Products/Get-Products";
import { GetProductId } from "./Products/Get-Products-By-Id";
import { CreateNewUser } from "./Users/Create-User";
import { GetUsers } from "./Users/Get-Users";


let rootReducers = combineReducers({
    productList:GetProducts,
    GetProduct : GetProductId,
    CreateProduct : CreateNewProduct,
    CreateUser : CreateNewUser,
    usersList : GetUsers
})

export default rootReducers