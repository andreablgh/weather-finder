import React from 'react';

const Weather = (props) => {
  return (
    <div className="det-cont">
      {props.city && props.country && <p className="weather-key">Location:
      <span className="details"> {props.city}, {props.country}</span></p>}
      {props.temperature && <p className="weather-key">
      Temperature: <span className="details">{props.temperature}</span></p>}
      {props.description && <p className="weather-key">
      Conditions: <span className="details">{props.description}</span></p>}
      {props.humidity && <p className="weather-key">Humidity:
      <span className="details"> {props.humidity} </span></p>}
      {props.error && <p className="details">{props.error}</p>}
    </div>
    );
}

export default Weather;
