import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Map from "./pages/Map"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Partnair from "./pages/Partnair"
import Program from "./pages/Program"
import Details from "./pages/Details"
import { Container } from "react-bootstrap"
import './App.css'
import { Context } from "./components/context"
import { useState } from "react"
import Faq from "./pages/Faq"
import Mentions from "./pages/Mentions"
import Concert from "./pages/Concert"



function App() {
  
  const [band,setBand]= useState();
  const [editor,setEditor]= useState(false);
  
  return (    
    <Context.Provider value={{
      updateBand: (newBand)=>setBand(newBand),
      band: band,
      updateEditor: (newEditor)=>setEditor(newEditor),
      editor: editor,      
      }}>
       <Container >
      <Header></Header>
      <div className="maxheight">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Partnair" element={<Partnair />} />
        <Route path="/Concert" element={<Concert />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Faq" element={<Faq />} /> 
        <Route path="/Mentions" element={<Mentions />} />       
      </Routes>
      </div>
      <Footer></Footer>      
      </Container> 
    </Context.Provider>
  )
}

export default App
