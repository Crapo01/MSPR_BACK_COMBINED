import { Button, Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from 'react';
import { Context } from "../context.jsx";
import { Field, Form, Formik } from "formik";
import userService from "../services/user.service.jsx";



function ButtonNew(props) {
    const toggleEditorMode = useContext(Context);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [initialValues, setInitialValues] = useState();

    useEffect(() => {
        switch (props.target) {
            case "Info": setInitialValues({ id: "", message: "", priority: false });
                break;
            case "Concert": setInitialValues({id: "",name: "",image: "https://i.ebayimg.com/images/g/iF0AAOSw6x9i5MMT/s-l1200.png",image_alt_text: "",description: "",origin: "",date: "",time: "",scene: "",link: ""});
                break;
        }
    }, []);

    function handleShow() {
        setShow(true);
    }

    function InfoModal() {
        if (props.target === "Info" || props.target === "Concert") {
            return (
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>"Ajouter une information"</Modal.Title>
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
                                            <Button className='btn-success border btn-sm' onClick={() => handleAdd(props.values)}>Ajouter</Button>
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

    

    async function handleAdd(values) {
        console.log(values);
        handleClose();
        if (window.confirm("Confirmez-vous la nouvelle entrée?")) {
            userService['create' + props.target](JSON.stringify(values, null, '  ')).then(response => {
            }).catch(error => console.log(error.message));

        }
    }

    return (
        <>
            <div style={toggleEditorMode.editor ? { display: 'block' } : { display: 'none' }}>
                <Button className='btn-primary btn-bottom-right-position' onClick={() => handleShow()}>Add {props.target}</Button>
            </div>


            <InfoModal />
        </>
    );
};

export default ButtonNew;