import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { BASE_URL } from '../config/config.js';
import ButtonAdminPanel from './buttons/ButtonAdminPanel.jsx';
import { useContext } from 'react';
import { Context } from './context.jsx';

function Header() {
  const toggleEditorMode = useContext(Context);

  return (

    <div>
      <div >
        <Navbar expand="xl" className={"mb-5 p-3 border rounded bg-dark"}>
          <Navbar.Brand ><Link to={"/"}><Image src="/images/logo_festival.png" alt="logo nation sound" width={"150px"} rounded /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link><Link to={"/"} style={{ textDecoration: 'none' }}><Button className='btn-light'>ACCUEIL</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Map"} style={{ textDecoration: 'none' }}><Button className='btn-light'>CARTE</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Concert"} style={{ textDecoration: 'none' }}><Button className='btn-light'>CONCERTS</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Program"} style={{ textDecoration: 'none' }}><Button className='btn-light'>PROGRAMME</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Partner"} style={{ textDecoration: 'none' }}><Button className='btn-light'>PARTENAIRES</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Faq"} style={{ textDecoration: 'none' }}><Button className='btn-light'>FAQ</Button></Link></Nav.Link>
              {/* <Nav.Link target="_blank"  href="https://nationsoundluc.rf.gd/wp/boutique/"><Button className='btn-light'>BOUTIQUE</Button></Nav.Link>   */}
              <Nav.Link target="_blank" href={`${BASE_URL}/boutique/`}><Button className='btn-light'>BOUTIQUE</Button></Nav.Link>
              

            </Nav>
          </Navbar.Collapse>

        </Navbar>

      </div>
      <div className="form-check form-switch mb-5 p-3 border rounded bg-dark d-flex">
        <div className='px-3'>
          <label className="form-check-label text-light m-2" role="switch" for="flexSwitchCheckDefault">toggle editor mode</label>
          <input className="form-check-input m-3" type="checkbox" id="flexSwitchCheckDefault" onClick={() => (toggleEditorMode.updateEditor(!toggleEditorMode.editor))} />
        </div>
        <p className="text-light mx-5 my-2"> Logged in as editor or admin</p>
        <Link to={"/Faq"} style={{ textDecoration: 'none' }}><ButtonAdminPanel title="Admin panel"></ButtonAdminPanel></Link>
      </div>
    </div>
  );
};

export default Header;