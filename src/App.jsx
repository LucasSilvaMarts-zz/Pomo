import React, { useContext, useEffect } from 'react';
import Button from './components/Button';
import TimePicker from './components/TimePicker';
import Timer from './components/Timer';
import { AppContext } from './context/AppContext';

function App() {

  const {
    time,
    timer,
    animation,
    setCurrentTime,
    startCountdown,
    pauseCountdown,
    stopCountdown,
    updateTimerConfig,
    children,
  } = useContext(AppContext);

  useEffect(() => {
    updateTimerConfig(timer);
  }, [timer, animation, updateTimerConfig])

  return (
    <main>
      <h1><span>P</span>omo</h1>
      <p>Stay focus, be happy!</p>
    <>
        <ul className="mode-buttons">
          <li>
            <Button
            title="Focus"
            callbackFunction={ () => setCurrentTime('focus') }
            />
          </li>
          <li>
            <Button
            title="Rest"
            callbackFunction={ () => setCurrentTime('rest') }
            />
          </li>
        </ul>

      <section className="timer-container">
        <section className="time-section">
          <Timer
            key={ time }
            timer={ time }
            animate={ animation }
          >
            { children }
          </Timer>
        </section>
      </section>
      <section className="buttons-container">
        <Button
          title={ <i class="far fa-play-circle"></i> }
          usingClass={ !animation && 'active' }
          callbackFunction={ startCountdown }
        />
        <Button
          title={ <i class="far fa-pause-circle"></i> }
          usingClass={ animation && 'active' }
          callbackFunction={ pauseCountdown }
        />
        <Button
          title={ <i class="far fa-stop-circle"></i> }
          callbackFunction={ stopCountdown }
        />
      </section>
    </>
      <TimePicker />
    </main>
  );
}

export default App;
