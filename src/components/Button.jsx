import React from 'react';

const Button = ({ title, usingClass, callbackFunction }) => {
  return (
    <button
      className={usingClass}
      onClick={callbackFunction}
    >
      {title}
    </button>
  );
};

export default Button;
