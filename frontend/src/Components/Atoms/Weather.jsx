import React, { useState, useEffect } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../../env";
import WindSvg from "./WindWeather";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import HumidityWeather from "./HumidityWeather";

const Weather = () => {
  const [showInput, setShowInput] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    // Fetch the device's default location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        // Handle error, for example, by setting default coordinates
        fetchWeatherData(DEFAULT_LATITUDE, DEFAULT_LONGITUDE);
      }
    );
  }, []);

  const toggleWeather = () => {
    setShowWeather((prevState) => !prevState);
  };

  useEffect(() => {
    // Fetch weather data when the city changes
    if (city) {
      fetchWeatherByCity(city);
    }
  }, [city]);

  const handleSearchIconClick = () => {
    setShowInput(true);
  };

  const handleSearchClose = () => {
    setShowInput(false);
    setInputCity("");
  };

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleUnitToggle = () => {
    // Toggle between Celsius and Fahrenheit
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      setCity(inputCity);
      setShowInput(false);
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading(true);
      setError(null);
      // Fetch weather data using coordinates
      const response = await fetch(
        `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city) => {
    try {
      setLoading(true);
      setError(null);
      // Fetch weather data using city name
      const response = await fetch(
        `${WEATHER_API_URL}?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div
      className={`bg-white p-2 pl-0 text-gray-900 rounded-[1rem] relative   ${
        showWeather
          ? "border border-gray-400,"
          : "hover:bg-gray-100 hover:shadow-sm"
      } `}
    >
      <div
        className="flex space-x-3  items-center  text-[0.9rem] font-[400] cursor-pointer"
        onClick={toggleWeather}
      >
        <div className="flex space-x-3 items-center justify-center font-[350] cursor-pointer "></div>
        <GlobeAsiaAustraliaIcon className=" w-6 h-6 cursor-pointer " />
        <div className="text-lg ">Weather</div>
      </div>

      <div
        className={`transition-all duration-[700ms] ${
          showWeather ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden `}
      >
        <div className="flex items-center ">
          {showInput && (
            <form className="absolute top-0 right-0 mt-8 transition-all duration-500">
              <input
                type="text"
                placeholder="Enter city name"
                value={inputCity}
                onChange={handleInputChange}
                onKeyPress={handleEnterKeyPress}
                className="h-[1.5rem] w-[12rem] mr-2"
              />
              <button
                type="button"
                onClick={handleSearchClose}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Close
              </button>
            </form>
          )}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-[0.8rem] text-red-500">{error}</p>}
        {weatherData && (
          <div className="flex flex-col pl-3 p-1 py-2 ">
            <div className="flex p-2 pt-0 justify-between items-center font-[400]">
              <div className="font-[500]">
                <div className="text-xl">
                  {weatherData.weather[0].description.charAt(0).toUpperCase() +
                    weatherData.weather[0].description.slice(1)}
                </div>
                <div className="text-base">
                  {weatherData.name}, {weatherData.sys.country}
                </div>
              </div>

              <div className="text-4xl font-[450]">
                {unit === "metric"
                  ? Math.round(weatherData.main.temp)
                  : Math.round(celsiusToFahrenheit(weatherData.main.temp))}
                {unit === "metric" ? "°C" : "°F"}
              </div>
            </div>

            <div className="flex mt-3 rounded-[0.5rem] p-2">
              <div className="flex w-1/2 flex-col items-center justify-center">
                <div className="flex space-x-3 text-base items-center">
                  <HumidityWeather /> <div>Humidity</div>
                </div>
                <div className="text-base text-blue-600">
                  {weatherData.main.humidity}%
                </div>
              </div>

              <div className="flex w-1/2 flex-col items-center justify-center">
                <div className="flex space-x-3 text-base items-center">
                  <WindSvg /> <div>Wind</div>
                </div>
                <div className="text-base text-blue-600">
                  {weatherData.wind.speed} <span className="text-sm">m/s</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleUnitToggle}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              {unit === "metric" ? "°F" : "°C"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
