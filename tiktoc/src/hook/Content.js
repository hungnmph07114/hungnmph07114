import React,{useState,useEffect } from "react";
//useEffect (callback)
// - Goik callbacl mỗi khi component re -render
//useEffect (callback,[])
//useEffect (callback,[Dj])
//----------
//1. Callback luôn được gọi sau khi component mounted
function Content(){
    const [title,setTitle] = useState('')
   useEffect(() =>{
       console.log('mounted')
   })
    return(
        <div>
      <input value={title}
      onChange={event => setTitle(event.target.value)}/>
        </div>
    )
}
export default Content;