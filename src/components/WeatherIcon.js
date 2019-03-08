import React from 'react';

import SnowImg from '../../build/static/wi-snow.svg';
import SleetImg from '../../build/static/wi-day-sleet-storm.svg';
import HailImg from '../../build/static/wi-hail.svg';
import ThunderstormImg from '../../build/static/wi-thunderstorm.svg';
import HeavyRainImg from '../../build/static/wi-rain.svg';
import LightRainImg from '../../build/static/wi-sprinkle.svg';
import ShowersImg from '../../build/static/wi-showers.svg';
import HeavyCloudImg from '../../build/static/wi-cloudy-gusts.svg';
import LightClougImg from '../../build/static/wi-cloudy.svg';
import ClearImg from '../../build/static/wi-day-sunny.svg';
import ThermometerImg from '../../build/static/wi-thermometer.svg';


const WeatherIcon = (props) => {
  const weatherImgArr = [];
  const weatherStatusArr = [];
  const divStyle = {
    display: 'flex', flexFlow: 'row', flex: 0.07, margin: 'auto', justifyContent: 'center', marginLeft: 50 
  }; 

  if (props.forecast[0].weather) {
    for (let i = 0; i < 7; i += 1) {
      switch (props.forecast[i].weather) {
        case 'Snow':
          weatherImgArr.push(<SnowImg style={divStyle} className="image" width={10} key={`${i}snow`}>hi</SnowImg>);
          weatherStatusArr.push('Snow');
          break;
        case 'Sleet':
          weatherImgArr.push(<SleetImg style={divStyle} className="image" key={`${i}sleet`} />);
          weatherStatusArr.push('Sleet');
          break;
        case 'Hail':
          weatherImgArr.push(<HailImg style={divStyle} className="image" key={`${i}hail`} />);
          weatherStatusArr.push('Hail');
          break;
        case 'Thunderstorm':
          weatherImgArr.push(<ThunderstormImg style={divStyle} className="image" key={`${i}thunderstorm`} />);
          weatherStatusArr.push('Thunderstorm');
          break;
        case 'Heavy Rain':
          weatherImgArr.push(<HeavyRainImg style={divStyle} className="image" key={`${i}heavyR`} />);
          weatherStatusArr.push('Heavy Rain');
          break;
        case 'Light Rain':
          weatherImgArr.push(<LightRainImg style={divStyle} className="image" key={`${i}lightR`} />);
          weatherStatusArr.push('Light Rain');
          break;
        case 'Showers':
          weatherImgArr.push(<ShowersImg style={divStyle} className="image" key={`${i}showers`} />);
          weatherStatusArr.push('Showers');
          break;
        case 'Heavy Cloud':
          weatherImgArr.push(<HeavyCloudImg style={divStyle} className="image" key={`${i}heavyC`} />);
          weatherStatusArr.push('Heavy Cloud');
          break;
        case 'Light Cloud':
          weatherImgArr.push(<LightClougImg style={divStyle} className="image" key={`${i}lightC`} />);
          weatherStatusArr.push('light cloud');
          break;
        case 'Clear':
          weatherImgArr.push(<ClearImg style={divStyle} className="image" key={`${i}clear`} />);
          weatherStatusArr.push('Clear');
          break;
        default:
          weatherImgArr.push(<div style={{ flexDirection: 'row' }} className="image" key={`${i}broken`}></div>);
          weatherStatusArr.push('Invalid Input');
      }
    }
  } else {
    for (let i = 0; i < props.forecast.length; i += 1) {
      weatherImgArr.push(
        <ThermometerImg style={divStyle} key={i} />
      );
      weatherStatusArr.push(<div  style={{flexFlow:'row', flex: 0.07}} >{props.forecast[0].temp}</div>);
    }
  } 
  return (
    <div style={{ display: 'flex' }} className="images">
      <div style={{ flex: 0.15 }} />
      {weatherImgArr}
      <div style={{ flex: 0.18 }} />
    </div>
  );
};


export default WeatherIcon;
