import React, { Component } from 'react';
import 'whatwg-fetch';

import Input from '../components/LocationInput';


class LocationData extends Component {
  state = {
    location: '',
  }

  handleLocationSubmit = async (event) => {
    const { location } = this.state;
    event.preventDefault();
    // console.log(typeof location)
    this.setState({ location: '' });
    try {
      const url = `/api/forecast?${location}`;
      const response = await fetch(url);
      const locationData = await response.text();
      console.log(locationData);
    } catch (error) {
      console.log('Error!', error);
    }
  }
  
  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <form onSubmit={event => this.handleLocationChange(event)}>
        <Input type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} />
        <button onClick={event => this.handleLocationSubmit(event)}>Location</button>
      </form>
    );
  }
}

export default LocationData;
