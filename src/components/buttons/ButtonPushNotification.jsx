import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../context";
import { useStompClient } from "react-stomp-hooks";

function ButtonPushNotification(props) {

    const stompClient = useStompClient();

    // async function handleClick(value) {
    async function handleClick() {
    await new Promise((r) => setTimeout(r, 500));
    if (stompClient) {
        // const temp = JSON.stringify({ msg: value.message, lnk: value.link })
        const temp = JSON.stringify({ msg: "test", lnk: "https://www.w3schools.com/" })
        stompClient.publish({ destination: '/app/broadcast', body: temp });
        alert("Notification envoyée...")
        window.location.reload();
    }
}
    
    const toggleEditorMode = useContext(Context);
            return (
                <div style={toggleEditorMode.editor?{ display: 'block' }:{ display: 'none' }}>
                    <Button className='btn-primary btn-bottom-left-position' onClick={() => handleClick()}>{props.title}</Button>          
               </div>
            ); 
        
};

export default ButtonPushNotification;