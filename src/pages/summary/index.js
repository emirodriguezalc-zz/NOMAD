import React from 'react';
import './styles.scss'
import hardware from '../../images/hardware.png';
import PortStatus from '../../components/portStatus';
import SummaryItems from '../../components/summaryItems';
import NtpTimeSync from '../../components/ntpTimeSync'
import portData from '../../data/portData.json';
import summaryData from '../../data/summaryItemData.json';

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

      </div>
      <div className='nomad-summary-items-wrapper'>
        <div className='nomad-summary-items'>
          <NtpTimeSync />
          {
            summaryData.map((item, i) => i < 3 && <SummaryItems name={item.name} status={item.status} children={item.children} />)
          }
        </div>

        <div className='nomad-summary-items'>
          {
            summaryData.map((item, i) => i > 3 && i < 7 && <SummaryItems name={item.name} status={item.status} children={item.children} />)
          }
        </div>
        <div className='nomad-summary-items'>
          {
            summaryData.map((item, i) => i > 6 && <SummaryItems name={item.name} status={item.status} children={item.children} />)
          }
        </div>
      </div>
    </div>
  </div>
);

export default summary
