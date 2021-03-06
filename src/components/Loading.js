import React from 'react';
import Chart from 'react-google-charts';

/**
 * Displays the bar chart with city and temperature
 * @param {string} city City to get weather from
 * @param {string} temp Th average of the high and low temperatures for the day in Celicius
 */


const WeatherLoading = ({ city }) => {
  const options = { city };

  const dataArr = [['DAY', 'TEMPERATURE IN C', { role: 'annotation' }]];
  for (let i = 0, day = new Date().getDay(); i < 6; i += 1, day += 1) {
    dataArr.push(['Loading', Math.floor(Math.random() * 50) + 1, 'Loading']);
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

export default WeatherLoading;
