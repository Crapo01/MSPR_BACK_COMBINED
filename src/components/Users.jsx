import { useContext, useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../components/context"
import useLocalStorage from "../hooks/useLocalStorage";
import { BASE_URL } from '../config/config.js';
import ButtonNew from "./buttons/ButtonNew.jsx";
import ButtonUpdate from "./buttons/ButtonUpdate.jsx";
import ButtonDelete from "./buttons/ButtonDelete.jsx";
import userService from "./services/user.service.jsx";
import EventBus from "./common/EventBus.jsx"
import RedirectToLogin from "./redirect-to-login.jsx";

function Users() {

    const [datas, setDatas] = useState(false);
    const [redirect,setRedirect] =useState(false);
    async function fetchData() {
        userService.getUsers().then(
            response => {
                console.log("response: " + response)
                const data = response.data;
                console.log(data.data);

                if (data.code === "rest_no_route") { throw "error:rest_no_route" } else { setDatas(data.data) };
                //console.log("datas: "+datas);
            },
            error => {
                if (error.response.status >=400 && error.response.status <=410) {
                    console.error("unauthorized")
                    EventBus.dispatch("logout");
                    setRedirect(true);
                }
                console.error(error.message);
            }
        );
    }
    useEffect(() => {
        fetchData();
    }, []);

    function UsersList() {

        if (datas) {
            return (
                <Row>
                    {datas.map((item) => (

                        <Col className="col-12 col-md-6 col-lg-4 p-3 ">
                            <div key={item.id} className={"p-3 border rounded shadow relative"}>
                                <img
                                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                    alt="profile-img"
                                    className="profile-img-card"
                                />
                                <h2>{"USERNAME: " + item.username}</h2>
                                <h3>ROLES:</h3>
                                <div> {item.roles.map((role) => (
                                    <div> {role.name}  </div>
                                ))}
                                </div>



                                {item.username != "superuser" && <><ButtonUpdate target="User" item={item}></ButtonUpdate>
                                <ButtonDelete target="User" id={item.id}></ButtonDelete></>}
                            </div>
                        </Col>
                    ))}
                </Row>
            )
        } else {
            return <h2><Image src="/images/loading.gif" alt="logo de chargement" />Pas de users pour le moment</h2>
        }
    }
    return (

        <div className={"p-3 m-md-5 border rounded bg-light"}>
            <div className="lightningBg border rounded relative">
                <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Users</h1>                
            </div>

            <UsersList />
            {redirect &&  <RedirectToLogin/>}
        </div>

    );
};

export default Users;