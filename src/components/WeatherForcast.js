import React, { Component } from 'react';
import Chart from 'react-google-charts';

/**
 * Displays the bar chart with city and temperature
 * @param {string} city City to get weather from
 * @param {string} temp Th average of the high and low temperatures for the day in Celicius
 */

const WeatherForecast = (props) => {
  const { city } = props;
  let title = 'CITY';
  if (city) title = city;
  const options = { title };

  const dataArr = [['DAY', 'TEMPERATURE IN C', { role: 'annotation' }]];
  // const day = new Date().getDay();
  const { forecast } = props;
  for (let i = 0, day = new Date().getDay(); i < 6; i += 1, day += 1) {
    dataArr.push([forecast[day].day, forecast[day].temp, forecast[day].weather]);
    if (day === 6) day = 0;
  }
  
  const columnGraph = (
    <Chart
      options={options}
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={dataArr}
    />
  );

  return <div className="forecastByDay">{columnGraph}</div>;
};

export default WeatherForecast;
