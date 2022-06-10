import React,{useState } from "react";
import Content from "./Content";
function MounteUnmounted(){
    const [show,setShow] = useState(false)

    return(
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content/>}
        </div>
    )
}
export default MounteUnmounted;