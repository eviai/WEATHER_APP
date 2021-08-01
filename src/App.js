import React from "react";
import "./styles.css";
import "./Forecast.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper border weather-app col">
          <div className="col-search">
            <Weather defaultCity="London" />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
