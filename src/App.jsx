
import './App.css'
import {HeroUIProvider} from "@heroui/react";
import NavArea from "./Components/Navbar/navArea"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherHero from './Components/WeatherHero/WeatherHero';

function App() {
 


  return (
    <BrowserRouter>
    <HeroUIProvider>
      <NavArea/>
      <Routes>
        <Route path='/' element={<WeatherHero/>}/>
      </Routes>

     
    </HeroUIProvider>


    </BrowserRouter>
    
  )
}

export default App
