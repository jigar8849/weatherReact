import React from 'react'


// components/ForecastList.jsx
import ForecastCard from "./ForecastCard";

function ForecastList({ forecast }) {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 min-w-[700px]">
        {forecast.map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default ForecastList;
