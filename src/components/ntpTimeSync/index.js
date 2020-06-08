import React, { useState, useEffect } from 'react';
import PortStatus from '../portStatus';
import axios from 'axios';
import Clock from '../clock'
import Timer from '../timer'

const NtpTimesync = () => {
  const url = 'http://worldtimeapi.org/api/ip'
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data)
      })
  }, [url])

  return (
    data ? (
      <div className="summary-item-wrapper">
        <PortStatus name='NTP Timesync' status='ok' className='port-status-items'/>
        <div className="summary-children-wrapper">
          <div>Updated : <Timer /> seconds ago</div>
          <div> {`Freq offset : 19.928 ppm`}</div>
          <div> {`Timezone : UTC${data.utc_offset}`}</div>
          <div> Time: <Clock /></div>
        </div>
      </div>) : <div>Loading</div>)
};

export default NtpTimesync;
