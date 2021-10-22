import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = () => {
  return (
    <CountdownCircleTimer
      duration={60}
      colors={[
          ['#00BECC', 0.33],
          ['#00BECC', 0.33],
          ['#00BECC', 0.33],
        ]}
        strokeWidth={6}
        size={225}
        trailColor="#444444"
    >

    </CountdownCircleTimer>
  );
};

export default Timer;
