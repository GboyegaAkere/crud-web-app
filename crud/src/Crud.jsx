import React from "react";
import AddList from "./AddList";
import EditList from "./EditList";


const  listData =[
    {
        id:1,
        name:"lenovo",
        price:'#300'
    },

    {
        id:2,
        name:"hp",
        price:'#30'
    },
]
function Crud(){
    const [list, setList] = React.useState(listData)
    const [update, setUpdate]= React.useState(-1)

    function handleSubmit(id){
        setUpdate(id)
    }

    return(
        <div>
            <h1>this is my crud app</h1>
            <AddList setList={setList}/>
            <EditList/>
            
            <table>
                {list.map((current)=>{
                    const {name, price} = current
                    return(
                        <tr>
                            <td>{name}</td>
                            <td>{price}</td>
                            <button onClick={()=>handleSubmit(current.id)}>edit</button>
                            <button>delete</button>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Crud