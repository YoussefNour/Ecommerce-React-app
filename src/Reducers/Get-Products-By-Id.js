export function GetProductById(state=null,action){
    if(action.type = "PRODUCTBYID"){
        return action.payload;
    }
    return state
}