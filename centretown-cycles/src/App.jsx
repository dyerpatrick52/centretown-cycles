import Homepage from "./components/Homepage"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Booking from "./components/Booking"
import { Route, Routes } from "react-router-dom"
import './App.css';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Homepage />
        } />
        <Route path="/services" element={
          <Services />
        } />
        <Route path="/contact" element={
          <Contact />
        } />
        <Route path="/booking" element={
          <Booking />
        } />
      </Routes>
    </>
  )
}

export default App
