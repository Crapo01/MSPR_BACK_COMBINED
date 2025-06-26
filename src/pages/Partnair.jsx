import { Col, Row } from "react-bootstrap";


function Partnair() {






    return (
        <section className="bg-light p-2">
            <div className="lightningBg border rounded ">
                <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">PARTENAIRES</h1>
            </div>

            <section className="p-3 m-md-5 border rounded bg-secondary">
                <div className="lightningBg border rounded ">
                    <h2 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Sponsors</h2>
                </div>
                <Row className="p-3 m-md-5  justify-content-around">
                    <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column ">
                        <h5 className="text-center"> VILLE DE PARIS</h5>
                        <img src="/images/part_paris.png" alt="Logo de la ville de paris représantant un voilier stylisé" />
                    </Col>
                    <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column ">
                        <h5 className="text-center"> LAVIGNE LOGISTICS</h5>
                        <img src="/images/part_lavigne.png" alt="Logo de lavigne logistics représentant des lettres imbriquées" />
                    </Col>
                </Row>
            </section>

            <section className="p-3 m-md-5 border rounded bg-secondary">
                <div className="lightningBg border rounded ">
                    <h2 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Technique</h2>
                </div>
                <Row className="p-3 m-md-5  justify-content-around">
                    <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column ">
                        <h5 className="text-center"> PYRO CONCEPT</h5>
                        <img src="/images/part_pyro.png" alt="Logo de pyro concept représantant un feu d'artifice stylisé" />
                    </Col>
                    <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column ">
                        <h5 className="text-center"> LAVIGNE LOGISTICS</h5>
                        <img src="/images/part_lavigne.png" alt="Logo de lavigne logistics représentant des lettres imbriquées" />
                    </Col>
                </Row>
            </section>   
            <section className="p-3 m-md-5 border rounded bg-secondary">
                <div className="lightningBg border rounded ">
                    <h2 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Logistique</h2>
                </div>
                <Row className="p-3 m-md-5  justify-content-around">                    
                    <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column ">
                        <h5 className="text-center"> LAVIGNE LOGISTICS</h5>
                        <img src="/images/part_lavigne.png" alt="Logo de lavigne logistics représentant des lettres imbriquées" />
                    </Col>
                </Row>
            </section> 

            <section className="p-3 m-md-5 border rounded bg-secondary">
                <div className="lightningBg border rounded ">
                    <h2 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Alimentation</h2>
                </div>
                <Row className="p-3 m-md-5  justify-content-around">
                    <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column ">
                        <h5 className="text-center"> DIMSUM TRUCK</h5>
                        <img src="/images/part_dimsum.png" alt="Logo de dimsum truck représantant un dimsum gourmand" />
                    </Col>
                    <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column ">
                        <h5 className="text-center"> TAPAS TRUCK</h5>
                        <img src="/images/part_tapas.png" alt="Logo de tapas truck représentant les mots tapas fabrik avec une fourchette à la place du i" />
                    </Col>
                </Row>
            </section>   


        </section>
    );
};

export default Partnair;