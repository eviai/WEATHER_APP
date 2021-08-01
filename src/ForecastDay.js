import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div className="forecast-day">
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecast-daily">{day()}</div>

      <div className="forecast-temp">
        <span className="forecast-max-temp">{maxTemp()}</span>
        <span className="forecast-min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
