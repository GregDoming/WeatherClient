import React, { Component } from 'react';
import 'whatwg-fetch';


import Input from '../components/LocationInput';

class LocationData extends Component {
  state = {
    location: '',
  }

  handleLocationSubmit = (event) => {
  event.preventDefault();
  this.setState({ location: '' })
    //   console.log(this.state.location)
    // fetch('/users', {
    //   method: 'POST',
    //   body: new FormData(form)
    // })
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value})
  }


  render () {
    console.log(this.state.location);
    return (
      <form onSubmit={this.handleLocationChange}>
        <Input type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} ></Input>
        <button onClick={this.handleLocationSubmit}>Location</button>
      </form>
    )
  }
}

export default LocationData;
