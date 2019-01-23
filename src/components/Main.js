import React, {Component} from 'react';
import Form from "./Form"
import Weather from "./Weather-details"
import "../App.css"

const API_KEY = "502e80a630a5309130f0bec2eeec3292";

class Main extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (data.cod === 404) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Oops, looks like you mistyped something"
      })
    }
    else if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter some value"
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="title-container">
            <h1 className="title">Weather Finder</h1>
            <p className="subtitle">Find out the weather anywhere</p>
            </div>
          </div>
          <div className="col-sm-7">
            <Form getWeather={this.getWeather}/>
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
                />
            </div>
        </div>
      </div>
    );
  }
};


export default Main;
