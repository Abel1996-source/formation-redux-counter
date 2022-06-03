
import { ActionTypes } from "../constants/action-type";
const initialState=0;
const counterReducer=(state=initialState,{type})=>{
    switch (type) {
        case ActionTypes.INCREMENT_COUNTER:
            return state+1;
        case ActionTypes.DECREMENT_COUNTER:
            return state-1;
        case ActionTypes.RESET_COUNTER:
            return state-state;
        default:
            return state;
    }
}

export default counterReducer;