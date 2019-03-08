import React from 'react';


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
