import React,{useState,useEffect } from "react";
//useEffect (callback)
// - Goik callbacl mỗi khi component re -render
//useEffect (callback,[])
//useEffect (callback,[Dj])
// - callblack được gọi lại mỗi khi dj thay đổi
//----------
//1. Callback luôn được gọi sau khi component mounted
function Content(){
    const tabs = ['posts','comments','albums']
    const [title,setTitle] = useState('');
    const [posts,setPosts] = useState([]);
    const [type,setType] = useState('posts');
    const [showGoToTop,setShowGoToTop] = useState(false)
   useEffect(() =>{
     fetch(`https://jsonplaceholder.typicode.com/${type}`).then(res =>res.json()).then( posts =>{
         setPosts(posts)
     })
   },[type])
    useEffect(() =>{
const handleScroll = () =>{
    console.log(window.scrollBy)
    if(window.scrollBy <= 200 ){
setShowGoToTop(true)
        console.log(showGoToTop)
    }else {
setShowGoToTop(false)
    }
    //setShowGoToTop(window.scrollBy >= 200)
}
        window.addEventListener('scroll',handleScroll)
    },[])
    return(
        <div>
            {tabs.map(tab =>(
                <button
                    style={ type === tab ? {} : {
                        color:'#fff',
                        backgroundColor:'#333'
                    }}
                    key={tab}
                    onClick={()=> setType(tab)}
                >{tab}</button>
            ))}
      <input value={title}
      onChange={event => setTitle(event.target.value)}/>
            <div>
                <ul>
                    {
                        posts.map((post,index) =>(
                            <li key={index}>{post.title || post.name}</li>
                        ))
                    }
                </ul>
            </div>
            {showGoToTop && (
                <button style={{
                    position:'fixed',
                    right:20,
                    bottom: 20,
                }}>
                    gototop
                </button>
            )}
        </div>
    )
}
export default Content;