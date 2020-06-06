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

  var options = { month: 'long'};
  const month = new Intl.DateTimeFormat('en-US', options).format(new Date());
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <span className='clock-wrapper'>
    {month} {day} {hours}:{minutes}:{seconds}
    </span>
  );
}

export default Clock;
