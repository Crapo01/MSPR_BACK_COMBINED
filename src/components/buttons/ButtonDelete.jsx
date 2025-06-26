import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../context";

function ButtonDelete(props) {
    const toggleEditorMode = useContext(Context);
                return (
                    <div style={toggleEditorMode.editor?{ display: 'block' }:{ display: 'none' }}>
                        <Button className='btn-danger btn-sm btn-bottom-right-position'>{props.title}</Button>          
                   </div>
                ); 
    
};

export default ButtonDelete;