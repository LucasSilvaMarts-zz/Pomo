import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const [time, setTime] = useState(25);
  const [timer, setTimer] = useState({
    focus: 25,
    rest: 5,
    type: 'Focus',
  });
  const [animation, setStartAnimation] = useState(false);

  function setCurrentTime(actualTimerState) {
    updateTimerConfig({
      ...timer,
      type: actualTimerState
    });
    setTimerType(timer)
  }

  function startCountdown() {
    setStartAnimation(true)
  }

  function pauseCountdown() {
    setStartAnimation(false)
  }

  function stopCountdown() {
    setStartAnimation(false)
    setTimer({
      focus: 25,
      rest: 5,
      type: 'Focus',
    })
    setTime(25)
  }

  const updateTimerConfig = (newConfig) => {
    setTimer(newConfig)
    setTimerType(newConfig)
  }

  const children = ({ remainingTime }) => {
    const seconds = remainingTime % 60

    return seconds
  }

  const setTimerType = (timerValues) => {
    switch (timerValues.type) {
      case 'focus':
        setTime(timerValues.focus)
        break;
      case 'rest':
        setTime(timerValues.rest)
        break;
      default:
        setTime(25)
        break;
    }
  }

  function stopAnimation() {
    setStartAnimation(false)
  }

  return (
    <AppContext.Provider value={{
      time,
      timer,
      animation,
      setCurrentTime,
      startCountdown,
      pauseCountdown,
      stopCountdown,
      updateTimerConfig,
      children,
      stopAnimation,
    }}
    >
      { props.children }
    </AppContext.Provider>
  )

}

export default AppContextProvider;
