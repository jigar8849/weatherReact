import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";

const API_KEY = "d98b905cb3a74981a83110924251506"; // Replace with your key

function App() {
  const [search, setSearch] = useState("Ahmedabad");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`
      );
      setWeather(res.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  useEffect(() => {
    fetchWeather(search);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-500 px-4">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl mx-auto">
        <SearchBar search={search} setSearch={setSearch} fetchWeather={fetchWeather} />
        {weather && (
          <>
            <CurrentWeather weather={weather} />
            <ForecastList forecast={weather.forecast.forecastday} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
