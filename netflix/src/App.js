import Navbar from "./Navbar"
// import Home from "./Home"
import Login from "./pages/login/Login"
// import Gallery from "./Gallery"
import { Route, Routes } from "react-router-dom"
// import Footer from "./Footer"
import React from 'react';
import './App.css';
import Landing from './pages/landing/Landing';

function App() {
  return (
    
  <>
  <Navbar /> 
  <div className="container">
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Landing />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
    </Routes>
  </div>
  {/* <Footer /> */}
</>
  ) 
}
export default App;
