import React,{useState } from "react";


const coures = [
    {
        id: 1,
        name:'a'
    },
    {
        id: 2,
        name:'b'
    },
    {
        id: 3,
        name:'c'
    },
]

function TwoWayBinding() {
    const [name, setName] =useState('')
    const [checked, setChecked] =useState([])
    const handleSubmit = () =>{
        console.log({ id : checked})
    }
    const handleCheck = (id) =>{
        setChecked(prev => {
            const  isChecked = checked.includes(id)
            if (isChecked){
                return checked.filter(item => item !== id)
            }else {
                return [...prev,id]
            }
        })
    }
    return(
        <div style={{padding:32}}>
            {
                coures.map(coure =>(
                    <div key={coure.id}>
                        <input type='radio'
                        checked={checked.includes(coure.id)}
                        onChange={()=>handleCheck(coure.id)}/>
                        {coure.name}
                    </div>

                ))
            }
            <button onClick={handleSubmit}>submit</button>
        </div>
    )

}
export default TwoWayBinding;