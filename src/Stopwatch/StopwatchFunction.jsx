import React, { useState, useRef } from "react";
//using hooks
export function Stopwatch() {
  const [timer, setTimer] = React.useState(0);
  const [times, setTimes] = useState([]);
  const timerInterval = useRef();

  const onStart = () => {
    if (timerInterval.current) return;

    timerInterval.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const onStop = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const onReset = () => {
    setTimer(0);
  };

  const onLap = () => {
    setTimes([timer, ...times]);
    setTimer(0);
  };
  
  const onClear = () => {
    setTimes([]);
  };

  return (
    <div>
      <div>{timer}</div>
      <div>
        <button onClick={onStart}>START</button>
        <button onClick={onStop}>STOP</button>
        <button onClick={onLap}>LAP</button>
        <button onClick={onReset}>RESET</button>
        <button onClick={onClear}>CLEAR</button>
      </div>
      <div>
        {times.map((time, index) => (
          <div key={index}>{time} </div>
        ))}
        ;
      </div>
    </div>
  );
}
