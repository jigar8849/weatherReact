import React from 'react'


// components/ForecastCard.jsx
function ForecastCard({ day }) {
  return (
    <div className="bg-white/10 p-4 rounded-xl text-center shadow">
      <h2 className="font-semibold mb-1">
        {new Date(day.date).toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </h2>
      <img src={day.day.condition.icon} alt="icon" className="w-12 mx-auto" />
      <div className="text-lg font-bold">{day.day.maxtemp_c}°</div>
      <div className="text-sm text-blue-100">{day.day.mintemp_c}°</div>
      <p className="text-sm text-white font-medium mt-2 leading-tight">
        💧 {day.day.avghumidity}% <br />
        🌬️ {day.day.maxwind_kph} kph
      </p>
    </div>
  );
}

export default ForecastCard;
