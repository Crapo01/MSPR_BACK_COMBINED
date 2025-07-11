
import ButtonAdminPanel from './buttons/ButtonAdminPanel.jsx';
import { useContext, useState, useEffect } from 'react';
import { Context } from './context.jsx';
import authService from './services/auth.service.jsx';
import { Link } from 'react-router-dom';

function EditingRights() {
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

  

  return (

    
      <section className="sticky z-3" style={userHasRights?{ display: 'block' }:{ display: 'none' }}>
      <div className="form-check form-switch mb-5 p-3 border rounded bg-dark d-flex"  >
        <div className='px-3'>
          <label className="form-check-label text-light m-2" role="switch" for="flexSwitchCheckDefault">toggle editor mode</label>
          <input className="form-check-input m-3" type="checkbox" id="flexSwitchCheckDefault" onClick={() => (toggleEditorMode.updateEditor(!toggleEditorMode.editor))} />
        </div>
        <p className="text-light mx-5 my-2"> Logged in as editor or admin</p>
        <Link to={"/Admin"} style={{ textDecoration: 'none' }}><ButtonAdminPanel title="Admin panel"></ButtonAdminPanel></Link>
      </div>
      </section>
      
  );
};

export default EditingRights;