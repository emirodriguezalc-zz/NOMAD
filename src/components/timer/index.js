import React, { useState, useEffect } from 'react';


function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time])

  return (
    <span className='timer-wrapper'>
      {time}
    </span>
  );
}

export default Timer;
