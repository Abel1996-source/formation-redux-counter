import { ActionTypes } from "../constants/action-type"

export const incrementCounter=()=>{
    return{
        type:ActionTypes.INCREMENT_COUNTER,
    }
}
export const decrementCounter=()=>{
    return{
        type:ActionTypes.DECREMENT_COUNTER,
    }
}
export const resetCounter=()=>{
    return{
        type:ActionTypes.RESET_COUNTER,
    }
}