import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";
import SunriseSunset from "./SunriseSunset";

export default function display(props) {
  return (
    <div className="cityTimeData">
      <div className="row">
        <div className="col-6">
          <h2 id="city">{props.data.city}</h2>
          <h5 id="weather-description">{props.data.description}</h5>
          <ul>
            <li>
              <img
                id="weather-conditions-icons"
                src="images/HUMIDITY.png"
                alt="humidity-icon"
              />
            </li>
            <li>{props.data.humidity}%</li>
            <li>
              <img
                id="weather-conditions-icons"
                src="images/WIND.png"
                alt="wind-icon"
              />
            </li>
            <li>{props.data.wind} Km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <h1 id="current-day-time">
            <FormattedDate date={props.data.date} />
          </h1>
          <strong id="current-time">
            <FormattedTime date={props.data.time} />
          </strong>
          <li id="sunrise">
            <img
              id="weather-conditions-icons"
              src="images/SUNRISE.png"
              alt="sunrise-icon"
            />
            <br />
            <br />
            <br />
          </li>
          <li id="sunrise-time">
            <SunriseSunset date={props.data.sunrise} />
          </li>
          <br />
          <li id="sunset">
            <img id="sunrise-icon" src="images/SUNSET.png" alt="sunset-icon" />
            <br />
            <br />
          </li>
          <li id="sunset-time">
            <SunriseSunset date={props.data.sunset} />
          </li>
        </div>
      </div>

      <div id="main-icon">
        <WeatherIcon code={props.data.icon} alt={props.data.decription} />
      </div>

      <div id="temp-format">
        <UnitConversion celsius={props.data.temperature} />
      </div>
    </div>
  );
}
