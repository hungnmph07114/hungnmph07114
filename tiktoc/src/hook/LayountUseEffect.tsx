import React, {useState ,useLayoutEffect} from "react";

function LayountUseEffect() {
    const [count, setCount] = useState(0);
    // useEffect(() =>{
    //     if (count > 3 ) {
    //         setCount(0)
    //     }
    // })
    useLayoutEffect(() =>{
        if (count > 3 ) {
            setCount(0)
        }
    })

    const handleRun = () => {
      setCount(count +1 )
    }

    return(
        <div>
<h1>{count}</h1>
            <button onClick={handleRun}>count</button>
        </div>
    )

}
export default LayountUseEffect;