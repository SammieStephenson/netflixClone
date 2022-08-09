import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import Gallery from "./Gallery"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}