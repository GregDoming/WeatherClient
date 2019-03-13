/* eslint-disable max-len */
import React from 'react';
import Chart from 'react-google-charts';

/**
 * Displays the bar chart with city and temperature
 * @param {string} props.city City to get weather from
 * @param {string} props.forecast[0].temp Average of the high and low temperatures for the day in Celicius
 * @param {string} props.forecast[0].weather Brief description for the weather for the day i.e "Heavy Rain"
 */

const WeatherForecast = ({ city, forecast }) => {
  const options = { title: city };
  const dataArr = [['DAY', 'TEMPERATURE IN C', { role: 'annotation' }]];

  for (let i = 0, day = new Date().getDay(); i < 6; i += 1, day += 1) {
    dataArr.push([forecast[day].day, forecast[day].temp, forecast[day].weather]);
    if (day === 6) day = -1;
  }
  

  return (
  <Chart
    options={options}
    chartType="ColumnChart"
    width="100%"
    height="400px"
    data={dataArr}
  />
  )};

export default WeatherForecast;
