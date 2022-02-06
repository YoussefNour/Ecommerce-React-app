export function CreateNewProduct(state=null,action){
    if(action.type === "CREATEPRODUCT"){
        return action.payload;
    }
    return state;
}