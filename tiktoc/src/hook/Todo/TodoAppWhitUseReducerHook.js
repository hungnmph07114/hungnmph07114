import React,{useReducer,useRef} from "react";
import reducer,{initState} from './reducer'
import {setJop,addJop,deleteJop} from './action'
import logger from "./logger";
function TodoAppWhitUseReducerHook() {
    const  inputRef = useRef()
    const [state,dispacth] = useReducer(logger(reducer),initState);
    const {job,jobs} =state
const handleSubmit = () => {
    dispacth(addJop(job))
    dispacth(setJop(''))
    inputRef.current.focus()
    }
    return(
        <div style={{padding :'0 20px'}}>
            <h3>Todo</h3>
        <input ref={inputRef} value={job}
               placeholder='Enter todo..'
               onChange={event => dispacth(setJop(event.target.value))}
        />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map( (job,index) =>(
                    <li key={index}>{job} <span onClick={()=>{dispacth(deleteJop(index))}}>&times;</span></li>
                ))}
            </ul>
        </div>
    )
} export default TodoAppWhitUseReducerHook