import React from 'react';

const CurrentWeather = ({ city, data, unit }) => {
  console.log("data", data, unit);
  if (!data || !data.weather || !data.weather[0]) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-center m-5 sm:m-10 md:m-20 bg-black bg-opacity-50 p-2 sm:p-5 md:p-10'>
      <h1 className='text-lg sm:text-2xl md:text-5xl font-bold text-white'>
        Current Weather {data.name}, {data.sys.country}
      </h1>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt="Weather Icon"
        className='h-8 sm:h-16 md:h-32 w-8 sm:w-16 md:w-32 mx-auto mt-2'
      />
      <p className='text-base sm:text-xl md:text-5xl text-blue-100 mt-2'>
        Temperature: {data.main.temp}&deg;{unit === 'metric' ? 'C' : 'F'}
      </p>
      <p className='text-sm sm:text-base md:text-3xl mt-2 text-slate-100'>
        Description: {data.weather[0].description}
      </p>
    </div>
  );
};

export default CurrentWeather;
