import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../context";

function ButtonUpdate(props) {
    const toggleEditorMode = useContext(Context);
        return (
            <div style={toggleEditorMode.editor?{ display: 'block' }:{ display: 'none' }}>
                <Button className='btn-warning btn-sm btn-top-right-position'>{props.title}</Button>         
           </div>
        );    
};

export default ButtonUpdate;