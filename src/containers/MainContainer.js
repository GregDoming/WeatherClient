/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'whatwg-fetch';

import Input from '../components/LocationInput';
import WeatherForecast from '../components/WeatherForcast';
import WeatherIcon from '../components/WeatherIcon';

const text = 'Enter an Address to get 6 day forecast';
const pass = '12345';

class MainContainer extends Component {
  state = {
    city: '',
    message: text,
    input: '',
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
    const { input } = this.state;
    event.preventDefault();
    this.setState({ city: input });
    this.setState({ input: '' });
    
    try {
      const url = `/api/forecast?${input}`;
      const response = await fetch(url, { 
        headers: new Headers({
          Authorization: pass
        })
      });
      const locationData = await response.json();
      if (!locationData.message) {
        const forecastObj = locationData.consolidated_weather;

        this.setState({}, this.parseForecast(forecastObj));
        this.setState({ message: text });  
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
    this.setState({ input: event.target.value.toUpperCase() });
  }

  render() {
    return (
      <div className="mainContainer">
        <form style={{ textAlign: 'center' }} onSubmit={event => this.handleLocationChange(event)}>
          <WeatherIcon forecast={this.state.forecast} />
          <WeatherForecast forecast={this.state.forecast} city={this.state.city} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Input style={{ textAlign: 'center' }} type="text" placeholder="Location" value={this.state.input} onChange={this.handleLocationChange} />
            <button style={{ textAlign: 'center' }} type="submit" onClick={event => this.handleLocationSubmit(event)}>Submit</button>
          </div>
          <div style={{ paddingTop: '100px', fontSize: '30px' }}>{this.state.message}</div>
        </form>
      </div>
    );
  }
}

export default MainContainer;
