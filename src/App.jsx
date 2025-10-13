
import './App.css'
import {HeroUIProvider} from "@heroui/react";
import NavArea from "./Components/Navbar/navArea"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherHero from './Components/WeatherHero/WeatherHero';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
 


  return (
    <BrowserRouter>
    <HeroUIProvider>
      <NavArea/>
      <Routes>
        <Route path='/' element={<WeatherHero/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

     
    </HeroUIProvider>


    </BrowserRouter>
    
  )
}

export default App
