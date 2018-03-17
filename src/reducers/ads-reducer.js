export default function(state = null, action){
    switch(action.type){
        case "BUSINESS_SELECTED":
            return action.payload;
            break;
    }
    return state;
}