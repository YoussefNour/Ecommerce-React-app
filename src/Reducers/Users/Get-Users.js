export function GetUsers(state=null,action){
    if(action.type === "USERS"){
        return action.payload;
        
    }
    return state;
}   