import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from "./vistas/LandingPage"
import HomePage from "./vistas/HomePage"
import DetailPage from "./vistas/DetailPage"
import FormPage from "./vistas/FormPage"




function App() {
  

  return (
    <>
       
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
