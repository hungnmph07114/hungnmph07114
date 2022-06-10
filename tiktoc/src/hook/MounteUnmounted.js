import React,{useState } from "react";
function MounteUnmounted(){
    const [show,setShow] = useState(false)

    return(
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
    )
}
export default MounteUnmounted;