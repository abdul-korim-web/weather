import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { ToastContainer, toast } from "react-toastify";

const WeatherHero = () => {
  const [weatherdata, setweatherdata] = useState(null);
  const [fromdata, setfromdata] = useState();
  const [city, setcity] = useState(``);

  const WeatherButton = async (e) => {
    e.preventDefault();
    let api = `https://api.weatherapi.com/v1/current.json?key=4685830df8af41f3bae124738251110&q=${fromdata}&aqi=no`;
    try {
      const responce = await fetch(api);
      const data = await responce.json();
      console.log(data);
      setweatherdata(data);
      if (data?.error) {
        toast.error(`Location Data Not Found`,)
        toast.error(`Please Try Another Location`,)
        
      } else{
        toast.success(`Location Found`)
      }
    } catch (error) {
      toast.error(`Data fetch fail`, {
        autoClose: 3000,
        position: `top-center`,
      });
    }
  };
  // titel change
  useEffect(() => {
    document.title = `Weather | Home`;
  }, []);
  return (
    <>
      <section className="weather-hero flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-400 text-white p-10 overflow-x-hidden">
        <ToastContainer position="top-center" autoClose="3000" />
        <div className="bg-white/10 backdrop-blur-md shadow-lg text-center px-6 py-10 rounded-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg ">
            Live Weather Updates, Anytime!
          </h2>

          <form
            action=""
            className="flex justify-center gap-3"
            onSubmit={WeatherButton}
          >
            <input
              onChange={(e) => setfromdata(e.target.value)}
              type="search"
              className="border border-white/40 bg-white/20 placeholder-white/70 text-white px-6 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Search city"
            />
            <button
              type="submit"
              className="w-12 h-12 rounded-full cursor-pointer bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all flex items-center justify-center"
            >
              <i className="fa-brands fa-searchengin"></i>
            </button>
          </form>
          <div className="w-full flex flex-col justify-center items-center md:mt-5">
            <img
              src={
                weatherdata?.current?.condition?.icon
                  ? `https:${weatherdata?.current?.condition?.icon}`
                  : `image/cloud.png`
              }
              className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
              alt=""
            />
          </div>
          <div className="mt-3 md:mt-5 ">
            <h2 className="text-5xl ">
              {`${weatherdata?.current?.temp_c || `0`}`}°c
            </h2>
            <h2 className="text-4xl">
              {weatherdata?.location?.name || `Your Location`}
            </h2>
            <p>{weatherdata?.location?.country || `Your Country`}</p>
            <p>{`${weatherdata?.location?.country || "Country"} Time : ${
              weatherdata?.location?.localtime || "Time"
            }`}</p>
          </div>
          <div className="flex justify-between items-center mt-6 w-full px-4">
            {/* Left Side - Humidity */}
            <div className="flex items-center gap-3">
              <img
                src="image/humidity.png"
                alt="humidity icon"
                className="w-10 h-10"
              />
              <div className="text-start">
                <h2 className="text-xl font-bold">{`${
                  weatherdata?.current?.humidity || `0`
                } %`}</h2>
                <p className="text-sm opacity-80">Humidity</p>
              </div>
            </div>

            {/* Right Side - Wind */}
            <div className="flex items-center gap-3">
              <img src="image/wind.png" alt="wind icon" className="w-10 h-10" />
              <div className="text-start">
                <h2 className="text-xl font-bold">
                  <span>{`${weatherdata?.current?.wind_kph || `0`} km/h`}</span>
                </h2>
                <p className="text-sm opacity-80">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherHero;
