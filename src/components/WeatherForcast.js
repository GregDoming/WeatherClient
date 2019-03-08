import React from 'react';

const WeatherForecast = (props) => {
  const { forecast } = props;
  const forecastArr = [];
  // const test = typeof forecast
  forecast.forEach((data) => {
    forecastArr.push(
      <div key={data.day}>
        <b>{data.day}</b>
        <strong>{data.weather}</strong>
        <strong>{data.temp}</strong>
      </div>
    );
  });

  return <div className="forecastByDay">{forecastArr}</div>;
};

export default WeatherForecast;
