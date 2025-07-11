import { useEffect, useState } from "react";
import {  Col, Image, Row } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";
import { BASE_URL } from '../config/config.js';
import ButtonNew from "./buttons/ButtonNew.jsx";
import ButtonUpdate from "./buttons/ButtonUpdate.jsx";
import ButtonDelete from "./buttons/ButtonDelete.jsx";
import ButtonPushNotification from "./buttons/ButtonPushNotification.jsx";

function Actu() {
    const [localDatas, setLocalDatas] = useLocalStorage("actu")
    const [datasNormal, setDatasNormal] = useState(false);
    const [datasPrio, setDatasPrio] = useState(false);

    async function fetchWordPressData() {
        try {
            //const response = await fetch("https://nationsoundluc.rf.gd/wp/wp-json/acf/v3/actu");
            const response = await fetch(`${BASE_URL}/api/informations/all`);
            const data = await response.json();
            //console.log(data)
            if (data.code === "rest_no_route") { throw "error:rest_no_route" } else { sortDatas(data) };

        } catch (error) {
            //console.log("Une erreur est survenue dans l'appel API actu: ")
            //console.log(error)       
        }
    }
    useEffect(() => {
        //console.log(localDatas);
        if (localDatas) {//console.log("uselocalstorage");
            sortDatas(localDatas)
        }
        fetchWordPressData();
    }, []);

    function sortDatas(data) {
        setLocalDatas(data)
        const normalTemp = new Array;
        const prioTemp = new Array;
        data.map((item) => (

            item.priority ? prioTemp.unshift(item) : normalTemp.push(item)
        ))
        setDatasNormal(normalTemp);
        setDatasPrio(prioTemp);
    }

    function NormalEvent() {
        if (datasNormal) {
            return (
                <>

                    <Row>

                        {datasNormal.map((item) => (
                            <Col key={item.id} className={"p-3 col-12 col-lg-6"} >
                                <div className={"px-3 py-4 border rounded shadow border-primary relative"}> {item.message}
                                    <ButtonUpdate target="Info" item={item}></ButtonUpdate>
                                    <ButtonDelete id={item.id} target="Info"></ButtonDelete>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </>
            )
        } else {
            return <h3><Image src="/images/loading.gif" alt="logo de chargement" />Pas d'infos pour le moment</h3>
        }
    }
    function PrioEvent() {
        if (datasPrio) {
            return (
                <>

                    <Row >
                        {datasPrio.map((item) => (
                            <Col key={item.id} className={"p-3 col-12 col-lg-6 "} >

                                <div className={"px-3 py-4 border rounded shadow border-danger relative"}> {item.message}
                                    <ButtonUpdate target="Info" item={item}></ButtonUpdate>
                                    <ButtonDelete id={item.id} target="Info" ></ButtonDelete>
                                </div>


                            </Col>
                        ))}
                    </Row>
                </>
            )
        } else {
            return <h3><Image src="/images/loading.gif" />Pas d'alertes pour le moment</h3>
        }
    }

    return (


        <div className={"p-3 m-md-5 border rounded bg-light"}>
            <div className="lightningBg border rounded relative">
                <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">INFORMATIONS</h1>
                <ButtonNew target="Info"></ButtonNew>
                <ButtonPushNotification title="Send push notification"></ButtonPushNotification>
            </div>

            <PrioEvent />
            <NormalEvent />
        </div>

    );
};

export default Actu;