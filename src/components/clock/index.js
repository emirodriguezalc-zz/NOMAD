import React, { useState, useEffect } from 'react';


function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(tick, 1000);

    return () => {
      clearInterval(tick)
    }

  }, [time])

  const tick = () => {
    setTime(new Date())
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <div className='clock-wrapper'>
      {hours}:{minutes}:{seconds}
    </div>
  );
}

export default Clock;
