import React, { useState } from 'react';

const TimePicker = () => {

  const [newTimer, setNewTimer] = useState({
    focus: 25,
    rest: 5,
    type: 'Focus',
  });

  const handleChange = ({target: { value, name }}) => {
    switch (name) {
      case 'focus':
        setNewTimer({
          ...newTimer,
          focus: parseInt(value)
        })
        break;
      case 'rest':
        setNewTimer({
          ...newTimer,
          rest: parseInt(value)
        })
        break;
    default:
        break;
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const { focus, rest } = newTimer;
  return (
    <section className="form-section">
      <form noValidate onSubmit={ handleSubmit }>
        <div className="config-inputs-container">
          <label>Focus</label>
          <input className="config-input" name="focus" value={ focus } onChange={ handleChange } />
          <label>Rest</label>
          <input className="config-input" name="rest" value={ rest } onChange={ handleChange } />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </section>
  );
};

export default TimePicker;
