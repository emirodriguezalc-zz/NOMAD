import React, { useState, useEffect } from 'react';
//import './styles';
import PortStatus from '../portStatus';
import axios from 'axios';
import moment from 'moment';
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
        <PortStatus name='NTP Timesync' status='ok' />
        <div>
          <div> {`Updated : ${moment().format('s')} secs ago`}</div>
          <div> {`Freq offset : 19.928 ppm`}</div>
          <div> {`Timezone : UTC${data.utc_offset}`}</div>
          <div>Time : <Clock /></div>
          <div>Time : <Timer /></div>
        </div>
      </div>) : <div>Loading</div>)
};

export default NtpTimesync;
