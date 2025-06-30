import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { BASE_URL } from '../config/config.js';
import ButtonAdminPanel from './buttons/ButtonAdminPanel.jsx';
import { useContext, useState, useEffect } from 'react';
import { FaSignOutAlt, FaSignInAlt ,FaUserPlus} from "react-icons/fa";
import { Context } from './context.jsx';
import authService from './services/auth.service.jsx';

function Header() {
  const toggleEditorMode = useContext(Context);
  const [userHasRights,setUserHasRights] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user)
      if (user.roles.includes("ROLE_EDITOR") || user.roles.includes("ROLE_ADMIN")) {
                setUserHasRights(true);                
            }
    }
  }, []);

  function logOut() {
    setCurrentUser(undefined)
    authService.logout();
  }

  return (

    <div>
      <div className="mb-5 p-3 border rounded bg-dark">

      <Navbar expand="lg" className=" justify-content-between">

        <Navbar.Brand ><Link to={"/"}><Image src="/images/logo_festival.png" alt="logo nation sound" width={"150px"} rounded /></Link></Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <div className='d-flex justify-content-end flex-column'>
              <div className='d-flex flex-lg-row flex-column ms-auto'>
              <Nav.Link><Link to={"/"} style={{ textDecoration: 'none' }}><Button className='btn-light'>ACCUEIL</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Map"} style={{ textDecoration: 'none' }}><Button className='btn-light'>CARTE</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Concert"} style={{ textDecoration: 'none' }}><Button className='btn-light'>CONCERTS</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Program"} style={{ textDecoration: 'none' }}><Button className='btn-light'>PROGRAMME</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Partner"} style={{ textDecoration: 'none' }}><Button className='btn-light'>PARTENAIRES</Button></Link></Nav.Link>
              <Nav.Link> <Link to={"/Faq"} style={{ textDecoration: 'none' }}><Button className='btn-light'>FAQ</Button></Link></Nav.Link>
              {/* <Nav.Link target="_blank"  href="https://nationsoundluc.rf.gd/wp/boutique/"><Button className='btn-light'>BOUTIQUE</Button></Nav.Link>   */}
              <Nav.Link target="_blank" href={`${BASE_URL}/boutique/`}><Button className='btn-light'>BOUTIQUE</Button></Nav.Link>
            </div>
              <div className='d-flex  justify-content-end mb-2 '>
                {currentUser ? (
                  <div className="navbar-nav justify-content-end flex-row">
                    <li className="nav-item  m-1 ">
                      <Link to={"/security/profile"} className="nav-link text-light">
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item bg-light m-1 rounded">
                      <a href="/security/login" className="nav-link px-2" onClick={logOut}>
                        <FaSignOutAlt size={25} className="text-dark" /> {/* Icône Logout */}
                      </a>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav justify-content-end flex-row">
                    <li className="nav-item bg-light m-1 rounded">
                      <Link to={"/security/login"} className="nav-link px-2">
                        <FaSignInAlt size={25} className="text-dark" />
                      </Link>
                    </li>
                    <li className="nav-item bg-light m-1 rounded">
                      <Link to={"/security/register"} className="nav-link px-2">
                        <FaUserPlus size={25} className="text-dark" />
                      </Link>
                    </li>
                  </div>
                )}
              </div>
            </div>  

            </Nav>
          </Navbar.Collapse>

        </Navbar>

      </div>
      <section style={userHasRights?{ display: 'block' }:{ display: 'none' }}>
      <div className="form-check form-switch mb-5 p-3 border rounded bg-dark d-flex"  >
        <div className='px-3'>
          <label className="form-check-label text-light m-2" role="switch" for="flexSwitchCheckDefault">toggle editor mode</label>
          <input className="form-check-input m-3" type="checkbox" id="flexSwitchCheckDefault" onClick={() => (toggleEditorMode.updateEditor(!toggleEditorMode.editor))} />
        </div>
        <p className="text-light mx-5 my-2"> Logged in as editor or admin</p>
        <Link to={"/Faq"} style={{ textDecoration: 'none' }}><ButtonAdminPanel title="Admin panel"></ButtonAdminPanel></Link>
      </div>
      </section>
    </div>
  );
};

export default Header;