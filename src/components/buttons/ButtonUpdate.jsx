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

        function ConcertModal() {
            console.log(initialValues);
        if ( props.target === "Concert") {
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

                        <div className="d-flex flex-column mx-5">
                            <div className="d-flex flex-column">
                                <label htmlFor="name">Nom du groupe</label>
                                <Field id="name" name="name" placeholder="Nom" className="my-3" />
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="image">Lien de l'image</label>
                                <Field id="image" name="image" placeholder="https:...." className="my-3" />
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="image_alt_text">Texte alternatif</label>
                                <Field id="image_alt_text" name="image_alt_text" placeholder="image representant..." className="my-3" />
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="description">Description</label>
                                <Field id="description" name="description" placeholder="Entrez une description" className="my-3" />
                            </div>
                            <div>
                                <label className="my-3">Origine</label>
                                <Field name="origin" as="select" >
                                    <option></option>
                                    <option value="Europe">Europe</option>
                                    <option value="Amerique">Amérique</option>
                                    <option value="Afrique">Afrique</option>
                                    <option value="Asie">Asie</option>
                                    <option value="Australie">Australie</option>
                                </Field>

                                <label className="my-3">Date</label>
                                <Field name="date" as="select" >
                                    <option value="14 juin">14 Juin</option>
                                    <option value="15 juin">15 Juin</option>
                                    <option value="16 juin">16 Juin</option>
                                </Field>

                                <label className="my-3">Heure</label>
                                <Field name="time" as="select" >
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                </Field>

                                <label className="my-3">Scene</label>
                                <Field name="scene" as="select" >
                                    <option value="principale">Principale</option>
                                    <option value="nord">Nord</option>
                                    <option value="est">Est</option>
                                    <option value="sud">Sud</option>
                                    <option value="ouest">Ouest</option>
                                </Field>

                                <div className="d-flex flex-column">
                                    <label htmlFor="link">Lien externe</label>
                                    <Field id="link" name="link" placeholder="lien" className="my-3" />
                                </div>
                            </div>
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

function PointerModal() {
        if (props.target === "Pointer") {
            return (
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>"Modifier un pointeur"</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Formik initialValues={initialValues} enableReinitialize>
                                {(props) => (
                                    <Form>
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-column flex-md-row">
                                                {/* Champ caché pour l'id */}
                                                <Field type="hidden" id="id" name="id" value={props.values.id} />
                                                <div className="d-flex flex-column mx-1">
                                                    <label>Type</label>
                                                    <Field name="type" as="select" className="type">
                                                        <option value="scene">scene</option>
                                                        <option value="alimentation">alimentation</option>
                                                        <option value="informations">informations</option>
                                                        <option value="toilettes">toilettes</option>
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row">
                                                <div className="d-flex flex-column mx-1">
                                                    <label htmlFor="lon">Longitude</label>
                                                    <Field type="number" step="0.0001" id="lon" name="lon" placeholder="longitude" value={props.values.lon} />
                                                </div>
                                                <div className="d-flex flex-column mx-1">
                                                    <label htmlFor="lat">Latitude</label>
                                                    <Field type="number" step="0.0001" id="lat" name="lat" placeholder="latitude" value={props.values.lat} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <label htmlFor="description">Description du pointeur</label>
                                                <Field id="description" name="description" placeholder="description" className="my-3" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <label htmlFor="link">Lien externe</label>
                                                <Field id="link" name="link" placeholder="lien" className="my-3" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <label htmlFor="name">Nom du pointeur</label>
                                                <Field id="name" name="name" placeholder="nom du pointeur" className="my-2" required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <Button className="btn-warning border btn-sm" onClick={() => handleUpdate(props.values)}>
                                                Update
                                            </Button>
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


function UserModal(){
            if (props.target === "User"){
                return (
                    <>                
    
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>"Mettre à jour une information"</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={initialValues} enableReinitialize>
                            {props => (
                                <Form>                                    
                                         <label className="my-3">ROLE</label>
                                                    <Field name="role" as="select" multiple>
                                                        <option value="admin">admin</option>
                                                        <option value="editor">editor</option>
                                                        <option value="viewer">viewer</option>
                                                    </Field>
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
                 userService['update'+props.target](JSON.stringify(values, null, '  '), values.id).then(response => {
                        }).catch(error => console.log(error.message));
    
            }
        }
    
        return (
            <>
                <div style={toggleEditorMode.editor ? { display: 'block' } : { display: 'none' }}>
                    <Button className='btn-warning btn-sm btn-top-right-position' onClick={() => handleShow(props.item)}>Update {props.target}</Button>
                </div>
    
                <ConcertModal/>
                <InfoModal/>
                <UserModal/>
                <PointerModal/>
            </>
        );
    };
       

export default ButtonUpdate;