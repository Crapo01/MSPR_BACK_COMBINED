import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../context";

function ButtonPushNotification(props) {
    
    const toggleEditorMode = useContext(Context);
            return (
                <div style={toggleEditorMode.editor?{ display: 'block' }:{ display: 'none' }}>
                    <Button className='btn-primary btn-bottom-left-position'>{props.title}</Button>          
               </div>
            ); 
        
};

export default ButtonPushNotification;