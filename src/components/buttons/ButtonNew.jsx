import { Button } from "react-bootstrap";
import { useContext } from 'react';
import { Context } from "../context.jsx";



function ButtonNew(props) {
    const toggleEditorMode = useContext(Context);
    return (
        <div style={toggleEditorMode.editor?{ display: 'block' }:{ display: 'none' }}>
            <Button className='btn-primary btn-bottom-right-position'>{props.title}</Button>         
       </div>
    );
};

export default ButtonNew;