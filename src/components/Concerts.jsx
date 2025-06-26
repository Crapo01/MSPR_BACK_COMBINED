import { useContext, useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../components/context"
import useLocalStorage from "../hooks/useLocalStorage";
import {BASE_URL} from '../config/config.js';
import ButtonNew from "./buttons/ButtonNew.jsx";
import ButtonUpdate from "./buttons/ButtonUpdate.jsx";
import ButtonDelete from "./buttons/ButtonDelete.jsx";

function Concerts() {
    const band = useContext(Context);
    const [localDatas,setLocalDatas] = useLocalStorage("concerts")
    const [datas, setDatas] = useState(false);
    async function fetchWordPressData() {
        try {
            //const response = await fetch("https://nationsoundluc.rf.gd/wp/wp-json/acf/v3/concerts");  
            const response = await fetch(`${BASE_URL}/wp-json/acf/v3/concerts`);          
            const data = await response.json();
            console.log(data)
            if (data.code === "rest_no_route") { throw "error:rest_no_route" } else { setDatas(data);setLocalDatas(data) };

        } catch (error) {
            console.log("Une erreur est survenue dans l'appel API: ")
            //console.log(error)
        }
    }
    useEffect(() => {
        //console.log(localDatas);
        if (localDatas) {//console.log("uselocalstorage");
            setDatas(localDatas)}
        fetchWordPressData();
    }, []);

    function Bands() {

        if (datas) {
            return (
                <Row>
                    {datas.map((item) => (

                        <Col className="col-12 col-md-6 col-lg-4 p-3 ">
                            <div key={item.id} className={"p-3 border rounded shadow relative"}>
                                <h2> {item.acf.name}</h2>
                                <img src={item.acf.image.url} alt={item.acf.image_alt_text} style={{ width: 100 + '%' }} />
                                <div>le {item.acf.date} à {item.acf.time}</div>
                                        <div>Scène: {item.acf.scene}</div>                                                               
                                <Link to={"/Details"} style={{ textDecoration: 'none' }} >
                                    <Button className='btn-dark m-4'
                                        onClick={() => (band.updateBand({ 
                                            name: item.acf.name,
                                            image: item.acf.image.url,
                                            image_alt_text: item.acf.image_alt_text,
                                            description: item.acf.description,
                                            origin: item.acf.origin,
                                            program: {date: item.acf.date,time: item.acf.time},
                                            scene: item.acf.scene
                                            }))}>
                                        plus de details...
                                    </Button>
                                </Link>
                                <ButtonUpdate title="Update concert"></ButtonUpdate>
                                <ButtonDelete title="Delete"></ButtonDelete>
                            </div>
                        </Col>
                    ))}
                </Row>
            )
        } else {
            return <h2><Image src="/images/loading.gif" alt="logo de chargement"/ >Pas de concerts pour le moment</h2>
        }
    }
    return (

        <div className={"p-3 m-md-5 border rounded bg-light"}>
            <div className="lightningBg border rounded relative">
            <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">CONCERTS</h1>
            <ButtonNew title="Add new concert"></ButtonNew>
            </div>
            
            <Bands />
        </div>

    );
};

export default Concerts;