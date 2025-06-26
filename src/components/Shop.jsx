import {BASE_URL} from '../config/config.js';

function Shop() {
    return (

        <div className={"p-3 m-md-5 border rounded bg-secondary"}>
            <div className="lightningBg border rounded">
            <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold ">BOUTIQUE</h1>
            </div>
            <div className="rounded m-2 d-flex flex-xl-row flex-column justify-content-around align-items-center bg-light p-3">
            <img src="/images/entree1jour.png" alt="entree 1 jour" className="img-fluid mx-auto " />
            <a target="_blank" href={`${BASE_URL}/boutique/`} ><button className='p-3 m-3 rounded font-weight-bolder bg-info text-dark text-decoration-none h3 text-center lobsterFont'>Acceder à la boutique</button></a> 
            <img src="/images/entree3jours.png" alt="entree 1 jour" className="img-fluid mx-auto " />
            </div>
        </div>    

    );
};

export default Shop;