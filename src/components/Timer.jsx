import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { AppContext } from '../context/AppContext';
import useSound from 'use-sound';

const Timer = ({ key, timer, animate, children }) => {

  const { stopAnimation } = useContext(AppContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer % 60}
      colors={[
          ['#00BECC', 0.33],
          ['#00BECC', 0.33],
          ['#00BECC', 0.33],
        ]}
      strokeWidth={6}
      size={225}
      trailColor="#444444"
      onComplete={
        () => { stopAnimation() }
      }
    >
      { children }
    </CountdownCircleTimer>
  );
};

export default Timer;
