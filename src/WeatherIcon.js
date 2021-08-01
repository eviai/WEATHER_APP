import React from "react";
import "./styles.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "SUN",
    "01n": "MOON",
    "02d": "SUN_CLOUD",
    "02n": "MOON_CLOUD",
    "03d": "CLOUD",
    "03n": "CLOUD",
    "04d": "SUPER_CLOUD",
    "04n": "MOON_CLOUD",
    "09d": "LIGHT_RAIN",
    "09n": "MOON_LIGHT_RAIN",
    "10d": "HEAVY_RAIN",
    "10n": "MOON_HEAVY_RAIN",
    "11d": "STORM",
    "11n": "MOON_STORM",
    "13d": "SNOW",
    "13n": "MOON_SNOW",
  };

  return (
    <div>
      <img src={"images/" + codeMapping[props.code] + ".png"} alt="main-icon" />
    </div>
  );
}
