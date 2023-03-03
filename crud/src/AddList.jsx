import React from "react";

function AddList({setList}){
    function handleSubmit(event){
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newList = {
            id:3,
            name,
            price
        }
        setList((prevState)=>{
            return prevState.concat(newList)
        })
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter name"/>
                <input type="text" name="price" placeholder="enten price"/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default AddList