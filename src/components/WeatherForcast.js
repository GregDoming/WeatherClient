import React from 'react';
import Chart from 'react-google-charts';

const WeatherForecast = (props) => {
  const options = { title: 'CITY' };
  // const check = props.forecast[0].temp
  if (props.forecast[0].temp === 0.5) {
    const dataArr = [
      ['DAY', 'TEMPERATURE IN C'],
      ['Sunday', 0],
      ['Monday', 0],
      ['Tuesday', 0],
      ['WednesDay', 0],
      ['Thursday', 0],
      ['Friday', 0],
      ['Saturday', 0],
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
  const { location } = props;
  const dataArr = [
    ['DAY', 'TEMPERATURE In C'],
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
    

  //   forecastArr.push(
  //     <div key={data.day}>
  //       <b>{data.day}</b>
  //       <strong>{data.weather}</strong>
  //       <strong>{data.temp}</strong>
  //     </div>
  //   );
 

  return <div className="forecastByDay">{columnGraph}</div>;
};


export default WeatherForecast;
