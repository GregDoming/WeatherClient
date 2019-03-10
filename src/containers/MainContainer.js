/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import 'whatwg-fetch';

import Input from '../components/LocationInput';
import WeatherForecast from '../components/WeatherForcast';
import WeatherIcon from '../components/WeatherIcon';
import WeatherLoading from '../components/WeatherLoading';

const text = 'Enter an Address to get 6 day forecast';
// Top Secret password
const pass = '12345';

class MainContainer extends Component {
  state = {
    city: '',
    message: text,
    input: '',
    loaded: true,
    forecast: 
    [      
      {
        day: 'Sunday',
        temp: 0.5,
        weather: ''    
      },
      {
        day: 'Monday',
        temp: 0.5,
        weather: ''    
      }, 
      {
        day: 'Tuesday',
        temp: 0.5,
        weather: ''    
      }, 
      {
        day: 'Wednesday',
        temp: 0.5,
        weather: ''
      
      }, 
      {
        day: 'Thursday',
        temp: 0.5,
        weather: ''     
      },
      {
        day: 'Friday',
        temp: 0.5,
        weather: ''     
      }, 
      {
        day: 'Saturday',
        temp: 0.5,    
        weather: ''
      },
    ]
  }

  // Sends fetch request to the microservice to get weather according to user's input 
  // && sets this.state.city and
  handleLocationSubmit = async (event) => {
    const { input } = this.state;
    event.preventDefault();
    this.setState({ 
      input: '',
      loaded: false
    });
    
    try {
      const url = `/api/forecast?${input}`;
      const response = await fetch(url, { 
        headers: new Headers({
          Authorization: pass
        })
      });
      const locationData = await response.json();
      if (!locationData.message) {
        const { city } = locationData;
        const forecastObj = locationData.consolidated_weather;
        // this.setState
        this.setState({}, this.parseForecast(forecastObj));
        this.setState({
          city,
          message: text,
          loaded: true
        });
        console.log(this.state);
      } else {
        this.setState({ message: locationData.message });
      }         
    } catch (error) {
      console.log('Error!', error);
    }
  }

  // Takes the response object from the server and puts the relevant information into state
  parseForecast = (obj) => {
    const tempForecast = Object.assign(this.state.forecast);

    let day = new Date().getDay();
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
          {this.state.loaded ? <WeatherForecast forecast={this.state.forecast} city={this.state.city} /> : <WeatherLoading forecast={this.state.forecast} city={this.state.city} />}
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
