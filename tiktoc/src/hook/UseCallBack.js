import React,{useState } from "react";
import Content2 from "./Content2";
function UseCallBack() {
    const [count, setCount] = useState(0);
    const increase = useCallback(
        () =>{
            setCount(count + 1)
        },
        [],
    );

    return(
        <div>
            <div style={{
                padding:20
            }}>
                  <Content2 onIncerase={count}/>
                <h1>{count}</h1>
                <button  onClick={increase}>Click me!</button>
            </div>

        </div>
    )
}
export default UseCallBack;