export function GetProducts(state=null,action){
    if(action.type == "PRODUCTS"){
        return action.payload;
        
    }
    return state;
}   