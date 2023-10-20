import { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import LandingPage from "./vistas/LandingPage"
import SearchBar from "./Components/SearchBar"
import HomePage from "./vistas/HomePage"
import DetailPage from "./vistas/DetailPage"
import FormPage from "./vistas/FormPage"




function App() {
  
  const location = useLocation();

  return (
    <>
       { location.pathname !== "/" && <SearchBar />}
          <Routes>

            <Route path="/" element={<LandingPage />} />

            <Route path="/home" element={<HomePage />} /> 
            
            <Route path="/detail/:id" element={<DetailPage />} />

            <Route  path="/create_driver"  element={<FormPage/>} />
          </Routes>
    </>
  )
}
export default App
