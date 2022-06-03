import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementCounter,decrementCounter,resetCounter} from '../redux/actions/action'
const Counter=()=>{
    const counter=useSelector((state)=>state.counter);
    const dispatch=useDispatch();
    console.log(counter);
    const increment=()=>{
         dispatch(incrementCounter())
    }
    const decrement=()=>{
         dispatch(decrementCounter())
    }
    const reset=()=>{
         dispatch(resetCounter())
    }
    return(
        <>
            <div className="container">
                <div className="counter">
                    {counter>0?counter:0}
                </div>
                <div className="actions">
                    <div className="decrement action">
                        <button onClick={decrement}>Decrement</button>
                    </div>
                    <div className="reset action">
                        <button onClick={reset}>Reset</button>
                    </div>
                    <div className="increment action">
                        <button onClick={increment}>Increment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;