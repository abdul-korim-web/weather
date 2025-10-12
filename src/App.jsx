
import './App.css'
import {HeroUIProvider} from "@heroui/react";
import NavArea from "./Components/Navbar/navArea"
function App() {
 


  return (
    <HeroUIProvider>
      <NavArea/>
     
    </HeroUIProvider>
  )
}

export default App
