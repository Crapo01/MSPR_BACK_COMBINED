import { Col, Row } from "react-bootstrap";

function Faq() {
    return (
        <>
            <Row className="lightningBg border rounded ">
                <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">FOIRE AUX QUESTIONS</h1>

                <Col className="col-11 m-2 bg-light border rounded d-flex flex-column">
                    <h2 className="text-center bg-light border rounded shadow ">Les animaux sont-ils autorisés ? </h2>
                    <p className="text-center p-3 ">Hélas, nos amis les animaux ne sont pas autorisés sur le site, à l’exception des chiens-guide. </p>
                </Col>

                <Col className="col-11 m-2 bg-light border rounded d-flex flex-column">
                    <h2 className="text-center bg-light border rounded shadow ">Quels sont les moyens d’accès au site? </h2>
                    <p className="text-center p-3 ">métro ligne 1, RER ligne A, bus </p>
                </Col>

                <Col className="col-11 m-2 bg-light border rounded d-flex flex-column">
                    <h2 className="text-center bg-light border rounded shadow ">Quels sont les objets interdits sur le site du festival? </h2>
                    <p className="text-center p-3 ">Sont interdits : boissons, bouteilles en verre, gourdes en verre, alcool, armes, tout objet pouvant servir de projectile ou nuire au public, casques, skateboard, trottinettes, animaux (sauf chiens-guide d’aveugles), téléobjectifs, caméras, perches à selfies, couteaux, pointeurs laser, drones… Toute personne refusant de se séparer d’un objet non autorisé se verra interdite d’accès. La sécurité du festival se réserve le droit de déroger à ces règles si elle l’estime nécessaire. Des consignes sont disponibles aux entrées.

 </p>
                </Col>

                <Col className="col-11 m-2 bg-light border rounded d-flex flex-column">
                    <h2 className="text-center bg-light border rounded shadow ">Qu’est-ce qui est autorisé sur le site du festival ?</h2>
                    <p className="text-center p-3 ">Sont autorisés sur le site : gourdes (sauf en verre), bouteilles en plastique, téléphones portables, pique-nique sans boisson, petits parapluies si le temps le justifie</p>
                </Col>

                <Col className="col-11 m-2 bg-light border rounded d-flex flex-column">
                    <h2 className="text-center bg-light border rounded shadow ">Quels types de passe seront mis en vente ?</h2>
                    <p className="text-center p-3 ">Lors de la mise en vente, 2 types de passe seront disponibles à l’achat : 1 jour et 3 jours</p>
                </Col>

            </Row>
        </>
    )
}


export default Faq;