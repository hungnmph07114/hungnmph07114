import React, {useState, useMemo, useRef} from "react";
function UseMemo() {
    const nameRef = useRef()
  const [name,setName]= useState('');
    const [price, setPrice] = useState('');
    const [products,setProducts] = useState([]);
    const handleSubmit = () => {
        setProducts([...products,{ name : name, price : + price }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    const total = useMemo(() =>{
        return products.reduce((result, prod) => {
            return result + prod.price
        }, 0)
    },[products])
    return(
        <React.Fragment>
<div style={{padding:'10px 32px'}}>
<input ref={nameRef} value={name} onChange={e => setName(e.target.value)} placeholder='Enter Name'/>
    <br/>
    <input value={price} onChange={e => setPrice(e.target.value)}/>
    <button onClick={handleSubmit}>ADD:</button>
    <br/>
    total:{total}
   <ul>
       {
           products.map((product,index) => (
               <li key={index}>{product.name} - {product.price}</li>
           ))
       }
   </ul>
</div>
        </React.Fragment>
    )
} export default UseMemo;