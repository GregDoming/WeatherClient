import React, { Component } from 'react';
import 'whatwg-fetch';

import Input from '../components/LocationInput';
import WeatherForecast from './WeatherForcast';
import './MainContainer.css';


class MainContainer extends Component {
  state = {
    location: '',
    forecast: 
    [      
      {
        day: 'sunday',
        temp: 0,
        weather: ''    
      },
      {
        day: 'monday',
        temp: 0,
        weather: ''    
      }, 
      {
        day: 'tuesday',
        temp: 0,
        weather: ''    
      }, 
      {
        day: 'wednesday',
        temp: 0,
        weather: ''
      
      }, 
      {
        day: 'thursday',
        temp: 0,
        weather: ''     
      },
      {
        day: 'friday',
        temp: 0,
        weather: ''     
      }, 
      {
        day: 'saturday',
        temp: 0,    
        weather: ''
      },
    ]
  }

  handleLocationSubmit = async (event) => {
    const { location } = this.state;
    event.preventDefault();
    // console.log(typeof location)
    this.setState({ location: '' });
    try {
      const url = `/api/forecast?${location}`;
      const response = await fetch(url);
      const locationData = await response.json();
      const forecastObj = locationData.consolidated_weather;

      const forecast = this.parseForecast(forecastObj);
      this.setState(forecast);
    } catch (error) {
      console.log('Error!', error);
    }
  }

  parseForecast = (obj) => {
    const date = new Date();
    const tempForecast = Object.assign(this.state.forecast);

    let day = date.getDay();
    let count = 0;

    while (count < obj.length) {
      tempForecast[day].temp = obj[count].the_temp;
      tempForecast[day].weather = obj[count].weather_state_name;

      count += 1;
      day += 1;
      if (day > 6) day = 0;
    }
  };
  
  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <div class="mainContainer">
        <form onSubmit={event => this.handleLocationChange(event)}>
          <WeatherForecast forecast={this.state.forecast} />
          <Input type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} />
          <button onClick={event => this.handleLocationSubmit(event)}>Location</button>
        </form>
      </div>
    );
  }
}

export default MainContainer;
