import React, {useState,useRef,useEffect} from "react";
function UseReftotal() {
    const [count, setCount] = useState(60);

    const timerId : any =  useRef();
    const prveCount : any = useRef();
    const h1Ref : any = useRef();
    // lấy giá trị state trước đó
    useEffect(() => {
prveCount.current = count
    }, [count]);
useEffect(() =>{
    const ref = h1Ref.current.getBoundingClientRect()
    console.log(ref)
})
const handleStart = () => {
    timerId.current = setInterval(() =>{
      setCount(prevState => prevState - 1)
    },1000)

}

    const handleStop = () => {
        console.log(timerId.current)
           clearTimeout(timerId.current)

    }
    return(
        <div style={{
            padding:20
        }}>
           <h1 ref={h1Ref}>{count}</h1>
            <button  onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>

    )
}
export default UseReftotal;