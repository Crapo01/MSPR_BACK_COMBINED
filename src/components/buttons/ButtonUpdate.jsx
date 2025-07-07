import { Button, Modal } from "react-bootstrap";
import { useContext, useState } from 'react';
import { Context } from "../context.jsx";
import { Field, Form, Formik } from "formik";
import userService from "../services/user.service.jsx";

function ButtonUpdate(props) {
    //console.log(props);
        const toggleEditorMode = useContext(Context);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
    
        const [initialValues, setInitialValues] = useState(props.item);
    
        function handleShow(i) {
            //setInitialValues(i);
            setShow(true);
        }
    
        function InfoModal(){
            if (props.target === "Info"){
                return (
                    <>
                {/* <div style={toggleEditorMode.editor ? { display: 'block' } : { display: 'none' }}>
                    <Button className='btn-primary btn-bottom-right-position' onClick={() => handleShow()}>Add {props.target}</Button>
                </div> */}
    
    
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>"Mettre à jour une information"</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={initialValues} enableReinitialize>
                            {props => (
                                <Form>
                                    <div className="d-flex flex-column mx-5">
                                        {/* Champ caché pour l'id */}
                                        <Field type="hidden" id="id" name="id" value={props.values.id} />
                                        <div className="d-flex flex-column">
                                            <label htmlFor="message">Message</label>
                                            <Field id="message" name="message" className="my-3" />
                                        </div>
                                        <div>
                                            <label>Important</label>
                                            <Field type="checkbox" name="priority" className="m-3" />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Button className='btn-success border btn-sm' onClick={() => handleUpdate(props.values)}>Mettre à jour</Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal>
            </>
                );
            }
            return null
        }
    
        async function handleUpdate(values) {
            console.log(values);
            handleClose();
            if (window.confirm("Confirmez-vous la nouvelle entrée?")) {
                switch (props.target) {
                    case "Info":
                        userService.updateInfo(JSON.stringify(values, null, '  '), values.id).then(response => {
                        }).catch(error => console.log(error.message));
                        break;
                    case "Concert":
                        userService.updateConcert(JSON.stringify(values, null, '  '), values.id).then(response => {
                        }).catch(error => console.log(error.message));
                        break;
                }
    
            }
        }
    
        return (
            <>
                <div style={toggleEditorMode.editor ? { display: 'block' } : { display: 'none' }}>
                    <Button className='btn-warning btn-sm btn-top-right-position' onClick={() => handleShow(props.item)}>Update {props.target}</Button>
                </div>
    
    
                <InfoModal/>
            </>
        );
    };
       

export default ButtonUpdate;