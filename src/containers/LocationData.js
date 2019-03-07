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
    this.setState({ location: '' });

    // const response = await fetch('http://localhost:4400/forecast', {
    //   method: 'Get',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   },
    //   body: location
    // });
    // await console.log(response);
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }


  render() {
    console.log(this.state.location);
    return (
      <form onSubmit={this.handleLocationChange}>
        <Input type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} />
        <button onClick={this.handleLocationSubmit}>Location</button>
      </form>
    );
  }
}

export default LocationData;
