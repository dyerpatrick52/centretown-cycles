import Homepage from "./components/Homepage"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Booking from "./components/Booking"
import AppointmentConfirmation from "./components/Booking/AppointmentConfirmation"
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
        <Route path="/booking/confirmation" element={
          <AppointmentConfirmation />
        } />
      </Routes>
    </>
  )
}

export default App
