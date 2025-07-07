import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../context";
import userService from "../services/user.service";

function ButtonDelete({id,target}) {
    const toggleEditorMode = useContext(Context);
    
    async function handleDelete(i) {
        console.log(i);

        if (window.confirm("Confirmez-vous vouloir effacer?")) {
            userService.deleteInfo(i).then(response => {
                if (response.data.code !== "rest_no_route") {                    
                    window.location.reload();
                }
            }).catch(error => alert(error.message));
        }
    }
    return (
        <div style={toggleEditorMode.editor ? { display: 'block' } : { display: 'none' }}>
            <Button className='btn-danger btn-sm btn-bottom-right-position' onClick={() => handleDelete(id)}>Delete {target}</Button>
        </div>
    );

};

export default ButtonDelete;