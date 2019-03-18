import React from 'react';

import SnowImg from '../../build/static/wi-snow.svg';
import SleetImg from '../../build/static/wi-day-sleet-storm.svg';
import HailImg from '../../build/static/wi-hail.svg';
import ThunderstormImg from '../../build/static/wi-thunderstorm.svg';
import HeavyRainImg from '../../build/static/wi-rain.svg';
import LightRainImg from '../../build/static/wi-sprinkle.svg';
import ShowersImg from '../../build/static/wi-showers.svg';
import HeavyCloudImg from '../../build/static/wi-cloudy.svg';
import LightClougImg from '../../build/static/wi-cloud.svg';
import ClearImg from '../../build/static/wi-day-sunny.svg';
import ThermometerImg from '../../build/static/wi-thermometer.svg';
import ThunderImg from '../../build/static/wi-night-thunderstorm.svg';

/**
 * Turns weather descriptions into corresponding svg icons to display above bar chart
 * @param {string} props.forecast[i].weather Six day one to two word 
 * descrtiption of the weather
 */

const WeatherIcon = (props) => {
  const divStyle = {
    display: 'flex', flexFlow: 'row', flex: 0.07, margin: 'auto', justifyContent: 'center', marginLeft: 50 
  };
  const weatherImgArr = [];
  const weatherStatusArr = [];

  // Check to see if weather exists on Monday or Sunday in case the day skipped is Sunday
  if (props.forecast[0].weather || props.forecast[1].weather) {
    for (let i = 0, day = new Date().getDay(); i < 7; i += 1, day += 1) {
      switch (props.forecast[day].weather) {
        case 'Snow':
          weatherImgArr.push(<SnowImg style={divStyle} width={10} key={`${i}snow`} />);
          weatherStatusArr.push('Snow');
          break;
        case 'Sleet':
          weatherImgArr.push(<SleetImg style={divStyle} key={`${i}sleet`} />);
          weatherStatusArr.push('Sleet');
          break;
        case 'Hail':
          weatherImgArr.push(<HailImg style={divStyle} key={`${i}hail`} />);
          weatherStatusArr.push('Hail');
          break;
        case 'ThunderStorm':
          weatherImgArr.push(<ThunderstormImg style={divStyle} key={`${i}thunderstorm`} />);
          weatherStatusArr.push('Thunderstorm');
          break;
        case 'Thunder':
          weatherImgArr.push(<ThunderImg style={divStyle} key={`${i}thunder`} />);
          weatherStatusArr.push('Thunder');
          break;
        case 'Heavy Rain':
          weatherImgArr.push(<HeavyRainImg style={divStyle} key={`${i}heavyR`} />);
          weatherStatusArr.push('Heavy Rain');
          break;
        case 'Light Rain':
          weatherImgArr.push(<LightRainImg style={divStyle} key={`${i}lightR`} />);
          weatherStatusArr.push('Light Rain');
          break;
        case 'Showers':
          weatherImgArr.push(<ShowersImg style={divStyle} key={`${i}showers`} />);
          weatherStatusArr.push('Showers');
          break;
        case 'Heavy Cloud':
          weatherImgArr.push(<HeavyCloudImg style={divStyle} key={`${i}heavyC`} />);
          weatherStatusArr.push('Heavy Cloud');
          break;
        case 'Light Cloud':
          weatherImgArr.push(<LightClougImg style={divStyle} key={`${i}lightC`} />);
          weatherStatusArr.push('light cloud');
          break;
        case 'Clear':
          weatherImgArr.push(<ClearImg style={divStyle} key={`${i}clear`} />);
          weatherStatusArr.push('Clear');
          break;
        default:
          weatherImgArr.push(<ClearImg style={{ flexDirection: 'row' }} key={`${i}broken`}></ClearImg>);
          weatherStatusArr.push('Invalid Input');
      }
      if (day === 6) day = -1;
    }
  } else {
    for (let i = 0; i < 6; i += 1) {
      weatherImgArr.push(
        <ThermometerImg style={divStyle} key={i} />
      );
    }
  } 

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 0.11 }} />
      {weatherImgArr}
      <div style={{ flex: 0.11 }} />
    </div>
  );
};


export default WeatherIcon;
