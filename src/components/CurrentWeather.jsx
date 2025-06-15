import React from 'react'

// components/CurrentWeather.jsx
function CurrentWeather({ weather }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-2">{weather.location.name}</h1>
      <img
        src={weather.current.condition.icon}
        alt="weather icon"
        className="mx-auto w-20"
      />
      <div className="text-3xl font-bold">{weather.current.temp_c}°C</div>
      <p className="text-lg mb-2">{weather.current.condition.text}</p>

      <div className="flex justify-center gap-6 text-sm text-white font-medium">
        <p>💧 Humidity: {weather.current.humidity}%</p>
        <p>🌬️ Wind: {weather.current.wind_kph} kph</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
