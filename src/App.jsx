import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';

const App = () => {
  const defaultCity = window.innerWidth < 640 ? 'City' : 'Uttarakhand';
  const [city, setCity] = useState(defaultCity);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bg, setBg] = useState();

  const handleCityChange = (newCity) => {
    setCity(newCity);
    setCurrentWeatherData(null);
    setForecastData(null);
    setError(null);
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const currentWeatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: city,
            units: unit,
            appid: 'd372aab78544ae3674d9614de25f99bc'
          }
        });
        setCurrentWeatherData(currentWeatherResponse.data);

        const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            q: city,
            units: unit,
            appid: 'd372aab78544ae3674d9614de25f99bc'
          }
        });
        const filteredForecastData = forecastResponse.data.list.slice(0, 40);

        setForecastData(filteredForecastData);

        const threshold = unit === 'metric' ? 20 : 60;
        if (currentWeatherResponse.data.main.temp <= threshold) {
          setBg(coldBg);
        } else {
          setBg(hotBg);
        }
      } catch (error) {
        setError("Error fetching weather data. Please try again.");
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city, unit]);

  return (
    <div className="max-w-7xl mx-auto p-8 text-center sm:px-6 lg:px-8" style={{ backgroundImage: `url(${bg})` }}>
      <SearchBar onCityChange={handleCityChange} onWeatherDataChange={setCurrentWeatherData} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {currentWeatherData && (
        <div>
          <UnitToggle unit={unit} onUnitToggle={handleUnitToggle} />
          <CurrentWeather city={city} data={currentWeatherData} unit={unit} />
          <Forecast city={city} data={forecastData} unit={unit} />
        </div>
      )}
    </div>
  );
};

export default App;
