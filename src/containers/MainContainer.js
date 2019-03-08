/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'whatwg-fetch';

import Input from '../components/LocationInput';
import WeatherForecast from '../components/WeatherForcast';
import WeatherIcon from '../components/WeatherIcon';
import './MainContainer.module.css';

const text = 'Enter an Address to get 6 day forecast';

class MainContainer extends Component {
  state = {
    message: text,
    location: '',
    forecast: 
    [      
      {
        day: 'sunday',
        temp: 0.5,
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
    
    this.setState({ location: '' });
    // console.log(typeof location)
    try {
      const url = `/api/forecast?${location}`;
      const response = await fetch(url);
      const locationData = await response.json();
      if (!locationData.message) {
        const forecastObj = locationData.consolidated_weather;

        this.setState({}, this.parseForecast(forecastObj));
        console.log(this.state.forecast);  
      } else {
        this.setState({ message: locationData.message });
      }         
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
      <div className="mainContainer">
        <form style={{textAlign: 'center'}} onSubmit={event => this.handleLocationChange(event)}>
          <WeatherIcon forecast={this.state.forecast}></WeatherIcon>
          <WeatherForecast forecast={this.state.forecast} location={this.state.location} />
          <div style={{ display:"flex", justifyContent: 'center' }}>
          <Input style={{ textAlign: 'center'}} type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} />
          <button style={{ textAlign: 'center' }}type="submit" onClick={event => this.handleLocationSubmit(event)}>Location</button>
          </div>
          <b>{this.state.message}</b>
        </form>
      </div>
    );
  }
}

export default MainContainer;
