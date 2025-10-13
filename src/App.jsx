import "./App.css";
import { HeroUIProvider } from "@heroui/react";
import NavArea from "./Components/Navbar/navArea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherHero from "./Components/WeatherHero/WeatherHero";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";


function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const Timer = setTimeout(() => {
      setisLoading(false);
    }, 1500);

    return () => clearTimeout(Timer);
  }, []);
  if(isLoading){
    return(
      <div className="bg-black flex flex-col min-h-screen justify-center items-center ">
        <SyncLoader color="white" />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <HeroUIProvider>
        <NavArea />
        <Routes>
          <Route path="/" element={<WeatherHero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  );
}

export default App;
