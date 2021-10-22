import React from 'react';
import Button from './components/Button';
import TimePicker from './components/TimePicker';
import Timer from './components/Timer';

function App() {
  return (
    <main>
      <h1>Pomo</h1>
      <p>Fique focado, seja feliz!</p>
    <>
        <ul className="mode-buttons">
          <li>
            <Button title={"Focus"} />
          </li>
          <li>
            <Button title={"Rest"} />
          </li>
        </ul>

      <section className="timer-container">
        <section className="time-section">
          <Timer />
        </section>
      </section>
      <section className="buttons-container">
        <Button title={<i class="far fa-play-circle"></i>} />
        <Button title={<i class="far fa-pause-circle"></i>} />
        <Button title={<i class="far fa-stop-circle"></i>} />
      </section>
    </>
      <TimePicker />
    </main>
  );
}

export default App;
