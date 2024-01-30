import React from 'react';
import "../css/ForecastDay.css";

const ForecastDay = ({ date, forecasts, unit }) => {
  const formatDate = (dt) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return new Date(dt * 1000).toLocaleDateString('en-US', options);
  };
  const firstForecast = forecasts[0];

  return (
    <div className="forecast-day text-center p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <h3 className='text-white'>{formatDate(firstForecast.dt)}</h3>
      <ul className='forecast-day-list'>
        <li key={`img-${firstForecast.dt}`}>
          <img src={`http://openweathermap.org/img/wn/${firstForecast.weather[0].icon}.png`} alt="Weather Icon" />
        </li>
        <li className='text-white text-2xl'>
          {firstForecast.main.temp} {unit === 'metric' ? '°C' : '°F'}
        </li>
      </ul>
    </div>
  );
};

export default ForecastDay;
