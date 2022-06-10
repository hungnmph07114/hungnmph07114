
import React,{useState } from "react";

const  gifts =[
    'CPU i9',
    'Ram 32 g',
    'RGB Keyboard'
]
function Random(){
    const [gift, setGift] = useState('')
    const ramdomGift = () =>{
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    }
    return(
        <div style={{padding:32}}>
          <h1>{gift || "Chua co thuong"}</h1>
            <button onClick={ramdomGift}>Lay thuong</button>
        </div>
    );
}
export default Random;