import React,{useState } from "react";
import Fakechatapp from "./Fakechatapp";
import LayountUseEffect from "./LayountUseEffect";
function MounteUnmounted(){
    const [show,setShow] = useState(false)

    return(
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show &&  <Fakechatapp/> }
            {
                show && <LayountUseEffect/>

            }

        </div>
    )
}
export default MounteUnmounted;