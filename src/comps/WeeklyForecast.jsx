// import React from 'react';

function WeeklyForecast(prop) {
    const { forecast } = prop
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-950">Weekly Forecast</h1>
      {forecast.map((day, index) => (
        <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-2xl font-semibold">{day.date}</h2>
          <p className="text-gray-600">Temperature: {day.temp}&deg;C</p>
          <p className="text-gray-600">Humidity: {day.humidity}%</p>
          <p className="text-gray-600">Wind Speed: {day.wind} m/s</p>
          <p className="text-gray-600">Cloudiness: {day.clouds}%</p>
          <p className="text-gray-600">Description: {day.description}</p>
          <img src={day.icon} alt="Weather Icon" className="w-16 h-16 mt-2" />
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
