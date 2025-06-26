import { useContext } from "react";
import { ConcertContext } from "../components/context";
import { Col, Row } from "react-bootstrap";





function Details() {
    const concert = useContext(ConcertContext);
    //console.log(`concert:${JSON.stringify(concert)} with ${Object.keys(concert).length} keys`)
    //console.log(concert.band)
    if (concert.band!==undefined)  
    return (
        <Row className={"p-3 border rounded shadow bg-light mb-5 mx-1"}>
            <Col className="col-12 p-3 border rounded bg-secondary">

                <h2> {concert.band.name}</h2>
            </Col>
            <Col className="col-12 col-md-6 p-3 ">
                <img src={concert.band.image} alt={concert.band.image_alt_text} style={{ width: 100 + '%' }} />
            </Col>
            <Col className="col-12 col-md-6 p-3 ">
                <p> {concert.band.description}</p>
            </Col>
            <Col className="col-12 col-md-6 col-lg-4">
                <h3>Origines:</h3>            
                <p>{concert.band.origin}</p>
            </Col>
            <Col className="col-12 col-md-6 col-lg-4">
                <h3>Programmation:</h3>
                <p>le {concert.band.program.date} à {concert.band.program.time}</p>
            </Col>
            <Col className="col-12 col-md-6 col-lg-4">
                <h3>Scène:</h3> <p>{concert.band.scene}</p>
            </Col>
        </Row>
    );
    else
    return(<div><h1>"pas de données disponibles"</h1>
    <img src="/images/imageBg.jpg" alt="background concert" /></div> )
};

export default Details;