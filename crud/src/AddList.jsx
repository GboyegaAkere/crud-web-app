import React from "react";
import { useRef } from "react";


function AddList({setList}){
    const nameRef =useRef()
    const priceRef = useRef()

    function handleSubmit(event){
        event.preventDefault()
       const name = event.target.elements.name.value
       const price = event.target.elements.price.value
       const newList ={
        id:3,
        name,
        price
       } 
       setList(function(prevState){
            return prevState.concat(newList)
       })
       nameRef.current.value =""
       priceRef.current.value=''
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter name" ref={nameRef}/>
                <input type="text" name="price" placeholder="enten price"  ref={priceRef}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default AddList