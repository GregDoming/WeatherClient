import React from 'react';

/**
 * Displays the bar chart with city and temperature
 * @param {string} input User input data that is parsed so all characters will work with HTML
 */

const input = (props) => {
  let inputElement = null;

  switch (props.inputType) {
    case ('text'):
      inputElement = <input {...props} />;
      break;
    default:
      inputElement = <input {...props}/>;
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
