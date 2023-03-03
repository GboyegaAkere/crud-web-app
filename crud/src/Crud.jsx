import React from "react";
import AddList from "./AddList";


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
    return(
        <div>
            <h1>this is my crud app</h1>
            <AddList setList={setList}/>
            <table>
                {list.map((current)=>{
                    const {name, price} = current
                    return(
                        <tr>
                            <td>{name}</td>
                            <td>{price}</td>
                            <button>edit</button>
                            <button>delete</button>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Crud