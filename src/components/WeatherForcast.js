import React from 'react';
import Chart from 'react-google-charts';

const WeatherForecast = (props) => {
  const { city } = props;
  const weatherArr = [];
  let title = 'CITY';

  if (city) title = city;
  const options = { title };
  // const check = props.forecast[0].temp
  if (props.forecast[0].temp === 0.5) {
    const dataArr = [
      ['DAY', 'TEMPERATURE IN C', { role: 'annotation' }],
      ['Sunday', 0, ''],
      ['Monday', 0, ''],
      ['Tuesday', 0, ''],
      ['WednesDay', 0, ''],
      ['Thursday', 0, ''],
      ['Friday', 0, ''],
      ['Saturday', 0, ''],
    ];
    
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
  }
  const { forecast } = props;
  const dataArr = [
    ['DAY', 'TEMPERATURE In C', { role: 'annotation' }],
    ['Sunday'],
    ['Monday'],
    ['Tuesday'],
    ['WednesDay'],
    ['Thursday'],
    ['Friday'],
    ['Saturday'],
  ];

  for (let i = 0; i < 7; i += 1) {
    dataArr[i + 1].push(Math.ceil(forecast[i].temp));
    dataArr[i + 1].push(forecast[i].weather);
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
