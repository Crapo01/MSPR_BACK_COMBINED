import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../context";

function ButtonAdminPanel(props) {
    const toggleEditorMode = useContext(Context);
        return (
            <div style={toggleEditorMode.editor?{ display: 'block' }:{ display: 'none' }}>
                <Button className='btn-danger'>{props.title}</Button>         
           </div>
        );    
};

export default ButtonAdminPanel;