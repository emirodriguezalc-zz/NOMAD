import React, { useState, useEffect } from 'react';


function Timer() {

  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(tick, 1000);

    return () => {
      clearInterval(tick)
    }

  }, [time])

  const tick = () => {
    setTime(time + 1)
  }

  return (
    <div className='timer-wrapper'>
      {time}
    </div>
  );
}

export default Timer;
