import React from 'react';

const TimePicker = () => {
  return (
    <section className="form-section">
      <form noValidate>
        <div className="config-inputs-container">
          <label>Focus</label>
          <input className="config-input" />
          <label>Rest</label>
          <input className="config-input" />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </section>
  );
};

export default TimePicker;
