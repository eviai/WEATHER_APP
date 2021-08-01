import React, { useState } from "react";
import "./styles.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" id="celsius-link">
            °C
          </a>
          <span className="divider">|</span>
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span id="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" id="celsius-link" onClick={showCelsius}>
            °C
          </a>
          <span className="divider">|</span>
          <a href="/" id="fahrenheit-link">
            °F
          </a>
        </span>
      </span>
    );
  }
}
