import React from 'react';
import './styles.scss'
import hardware from '../../images/hardware.png';
import PortStatus from '../../components/portStatus';
import SummaryItems from '../../components/summaryItems';
import NtpTimeSync from '../../components/ntpTimeSync'
import portData from '../../data/portData.json';
import summaryData from '../../data/summaryItems.json';

const summary = () => (
  <div className="summary-wrapper">
    <h1 className="summary-title">Summary</h1>
    <div className='nomad-hardware-containter'>
      <img className="nomad-hardware-image" src={hardware} alt="hardware image" />
      <div className='nomad-hardware-port-wrapper'>
        {
          portData.map((port) => <PortStatus name={port.name} status={port.status} />)
        }
      </div>
      <div>
        <NtpTimeSync />
      </div>
      <div className='nomad-summary-items-wrapper'>
        {
          summaryData.map((item) => <SummaryItems name={item.name} status={item.status} children={item.children} />)
        }
      </div>

    </div>
  </div>
);

export default summary
