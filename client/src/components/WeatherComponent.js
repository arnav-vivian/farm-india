import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'fed1c7ad497f7372b1570d56aa19f81d';
        const city = 'Samastipur';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        setError('Error fetching weather data');
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{weatherData.name}</h2>
          <div className="flex flex-wrap gap-4">
            <div className="p-2 bg-white rounded-md shadow-md">
              <p className="text-lg">Temperature</p>
              <p>{weatherData.main.temp} &#8451;</p>
            </div>
            <div className="p-2 bg-white rounded-md shadow-md">
              <p className="text-lg">Humidity</p>
              <p>{weatherData.main.humidity} %</p>
            </div>
            <div className="p-2 bg-white rounded-md shadow-md">
              <p className="text-lg">Wind Speed</p>
              <p>{weatherData.wind.speed} m/s</p>
            </div>
           
            {/* Add more parameters here */}
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
