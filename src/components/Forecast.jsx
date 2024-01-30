import React from 'react';
import ForecastDay from './ForecastDay';

const Forecast = ({ city, data, unit }) => {
  if (!data) {
    return null;
  }

  const groupedForecast = data.reduce((grouped, forecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(forecast);
    return grouped;
  }, {});

  return (
    <div className="forecast">
      <h2 className='text-3xl font-semibold md:text-4xl lg:text-4xl'>6-Day Forecast for {city}</h2>
      <div className='flex flex-wrap justify-center md:flex-row'>
        {Object.entries(groupedForecast).map(([date, forecasts]) => (
          <ForecastDay key={date} date={date} forecasts={forecasts} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
