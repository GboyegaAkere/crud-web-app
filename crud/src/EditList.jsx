import React from "react";

function EditList(){
    return(
        <div>
            <form action="">
                <tr>
                    <td><input type="text" name="name" /></td>
                    <td><input type="text" name="price"/></td>
                    <button type="submit">add</button>
                </tr>
            </form>
        </div>
    )
}
export default  EditList