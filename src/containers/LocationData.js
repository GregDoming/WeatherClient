import React, { Component } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types'

import Input from '../components/LocationInput.js';

class LocationData extends Component {
  state = {
    location: '',
  }

  // handleLocationClick = async (str) => {
  //   // fetch('/users', {
  //   //   method: 'POST',
  //   //   body: new FormData(form)
  //   // })
  // }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }


  render () {
    console.log(this.state.location);
    return (
      <form onSubmit={this.handleChange}>
        <Input inputType="input" type="text" placeholder="Location" ></Input>
        {/* <button onClick={this.handleLocationClick}></button> */}
      </form>
    )
  }
}

export default LocationData;
