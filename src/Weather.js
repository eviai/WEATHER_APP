import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";

import axios from "axios";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }

  function search() {
    let apiKey = "51ac8c007be10df8c6279a4b5212951e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function currentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "51ac8c007be10df8c6279a4b5212951e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <div className="col-search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder=""
              id="search-text-input"
              autoFocus="on"
              onChange={handleCitySearch}
            />

            {/* <input
              id="search-button"
              type="image"
              name="submit"
              src="images/SEARCH.svg"
              alt="Submit"
            /> */}

            <button id="current-location-button">
              <img
                id="current-location-button-image"
                src="images/CURRENT_LOCATION.svg"
                alt=""
                onClick={showCurrentLocation}
              />
            </button>
          </form>
          <br />

          <WeatherDisplay data={weatherData} />

          <Forecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
