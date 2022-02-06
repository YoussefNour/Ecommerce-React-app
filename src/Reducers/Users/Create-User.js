export function CreateNewUser(state=null,action){
    if(action.type === "CREATEUSER"){
        return action.payload;
    }
    return state;
}