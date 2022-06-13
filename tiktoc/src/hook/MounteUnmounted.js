import React,{useState } from "react";
import Fakechatapp from "./Fakechatapp";
function MounteUnmounted(){
    const [show,setShow] = useState(false)

    return(
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show &&  <Fakechatapp/>}
        </div>
    )
}
export default MounteUnmounted;