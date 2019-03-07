import React, { Component } from 'react';
import 'whatwg-fetch';

import Input from '../components/LocationInput';

class LocationData extends Component {
  state = {
    location: '',
  }

  componentDidMount() {
    
  }

  handleLocationSubmit = async (event) => {
    const { location } = this.state;
    event.preventDefault();
    this.setState({ location: '' });
    try {
      const response = await fetch('http://localhost:4400/forecast', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: { location }
      });
      const locationData = await response.text();
      
      // const locationData = await JSON.parse(response);
      // console.log(locationData.body)
    } catch (error) {
      console.log('Error!', error);
    }
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }


  render() {
    return (
      <form onSubmit={this.handleLocationChange}>
        <Input type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} />
        <button onClick={this.handleLocationSubmit}>Location</button>
      </form>
    );
  }
}

export default LocationData;
