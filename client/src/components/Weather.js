import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [update, setUpdate] = useState(false);
  const [weather, setWeather] = useState("");
  const [zip, setZip] = useState("");
  const toggleUpdate = () => {
    setUpdate(!update);
  };
  const handleChange = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=2a93b4c760764747b73141547222001&q=${zip}&days=10&aqi=yes&alerts=yes`
    );
    setWeather(res.data);
    toggleUpdate();
  };
  return (
    <div>
      {update === false ? (
        <form onSubmit={handleSubmit} className="form">
          <label>Enter Zip Code or City Name:</label>
          <input
            id="zip"
            type="text"
            name="zip"
            value={zip}
            onChange={handleChange}
          ></input>
          <input type="submit" value="submit" />
        </form>
      ) : (
        <div className="weather">
          <div className="weather-temp">
            <div className="location">
              {weather.location.name}, {weather.location.region}
            </div>
            <div className="temp">Temp: {weather.current.temp_f} F</div>
          </div>

          <div className="weather-details">
            <div>Feels like: {weather.current.feelslike_f} F</div>
            <div>Wind Speed: {weather.current.wind_mph} MPH</div>
            <div>Wind Direction: {weather.current.wind_dir}</div>
            <div>Humidity: {weather.current.humidity}</div>
            <div>
              Max Temp: {weather.forecast.forecastday[0].day.maxtemp_f} F
            </div>
            <div>
              Min Temp: {weather.forecast.forecastday[0].day.mintemp_f} F
            </div>
            <div>
              Chance of Snow:{" "}
              {weather.forecast.forecastday[0].day.daily_chance_of_snow}%
            </div>
            <div>Sunrise: {weather.forecast.forecastday[0].astro.sunrise}</div>
            <div>Sunset: {weather.forecast.forecastday[0].astro.sunset}</div>
            <div>Last Updated: {weather.current.last_updated}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
