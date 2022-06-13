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
    const [showGoToTop,setShowGoToTop] = useState(false);
    const [width,setWidth] = useState(window.innerWidth);
   useEffect(() =>{
     fetch(`https://jsonplaceholder.typicode.com/${type}`).then(res =>res.json()).then( posts =>{
         setPosts(posts)
     })
   },[type])
    useEffect(() =>{
const handleScroll = () =>{
    if(window.scrollY <= 200 ){
setShowGoToTop(true)
    }else {
setShowGoToTop(false)
    }
    //setShowGoToTop(window.scrollBy >= 200)
    // Cleanup function

}
        window.addEventListener('scroll',handleScroll)
        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    useEffect(() =>{
     const   handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
    })
    return(
        <div>
            <div>{width}</div>
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
export default React.memo(Content);