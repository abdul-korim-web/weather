import React from "react";
import { Button } from "@heroui/react";

const WeatherHero = () => {
  return (
    <>
      <section className="weather-hero flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-400 text-white">
        <div className="bg-white/10 backdrop-blur-md shadow-lg text-center px-6 py-10 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Live Weather Updates, Anytime!
          </h2>
          <form action="" className="flex justify-center gap-3">
            <input
              type="search"
              className="border border-white/40 bg-white/20 placeholder-white/70 text-white px-6 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Search city"
            />
            <button
              type="submit"
              className="w-12 h-12 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all flex items-center justify-center"
            >
              <i className="fa-brands fa-searchengin"></i>
            </button>
          </form>
          <div className="w-full flex flex-col justify-center items-center">
            <img src="image/cloud.png" className="" alt="" />
          </div>
          <div>
            <h2 className="text-5xl ">24c</h2>
            <h2 className="text-4xl">LonDon</h2>
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
                <h2 className="text-xl font-bold">64%</h2>
                <p className="text-sm opacity-80">Humidity</p>
              </div>
            </div>

            {/* Right Side - Wind */}
            <div className="flex items-center gap-3">
              <img src="image/wind.png" alt="wind icon" className="w-10 h-10" />
              <div className="text-start">
                <h2 className="text-xl font-bold">
                  <span>18</span> km/h
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
