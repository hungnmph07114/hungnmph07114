import React from "react";

function Content2({increas}) {
    console.log('ren-render')
    return (
        <>
            <h2>Helle</h2>
            <button onClick={increase}>Click me!</button>
        </>
    )
}

export default React.memo(Content2)