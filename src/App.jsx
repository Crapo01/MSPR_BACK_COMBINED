import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Map from "./pages/Map"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Partner from "./pages/Partner"
import Program from "./pages/Program"
import Details from "./pages/Details"
import { Container } from "react-bootstrap"
import './App.css'
import { Context } from "./components/context"
import { useState } from "react"
import Faq from "./pages/Faq"
import Mentions from "./pages/Mentions"
import Concert from "./pages/Concert"
import LoginComponent from "./components/security/login.component.jsx"
import Register from "./components/security/register.component.jsx"
import Profile from "./components/security/profile.component.jsx"
import { StompSessionProvider, useStompClient, useSubscription } from "react-stomp-hooks"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {BASE_URL} from '././config/config.js';



function App() {

  const [band, setBand] = useState();
  const [editor, setEditor] = useState(false);

  const PushNotification = () => {
    const [message, setMessage] = useState("");

    const CustomToastWithLink = () => (
      <div>
        <p>{message.msg}</p>
        {/* <Link to="/Concert">+ D'infos ici</Link> */}
        {message.lnk&&<a href={message.lnk}>+ D'infos ici</a>}
      </div>
    );

    // Subscribe to the topic that we have opened in our spring boot app
    useSubscription('/topic/reply', (notif) => { setMessage(JSON.parse(notif.body)) });
       
    message ? toast.error
      (CustomToastWithLink, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        theme: "colored",
      }) : null;
  }





  return (
    <Context.Provider value={{
      updateBand: (newBand) => setBand(newBand),
      band: band,
      updateEditor: (newEditor) => setEditor(newEditor),
      editor: editor,
    }}>
      <Container >
        <ToastContainer
          position="bottom-right"
          autoClose={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          theme="colored"
        />
        <Header></Header>
        <StompSessionProvider
          url={`${BASE_URL}/ws-endpoint`}>
          <PushNotification />
        <div className="maxheight">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Partner" element={<Partner />} />
            <Route path="/Concert" element={<Concert />} />
            <Route path="/Program" element={<Program />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Mentions" element={<Mentions />} />
            <Route path="/security/login" element={<LoginComponent />} />
            <Route path="/security/register" element={<Register />} />
            <Route path="/security/profile" element={<Profile />} />
          </Routes>
        </div>
        </StompSessionProvider>
        <Footer></Footer>
      </Container>
    </Context.Provider>
  )
}

export default App
