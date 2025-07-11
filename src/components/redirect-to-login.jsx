import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectToLogin() {
    let navigate = useNavigate();
    useEffect(() => {
        redirect()
    }, []);
    function redirect() {
        navigate("/security/login")        
    }
  }
  export default RedirectToLogin;