import React from 'react';
import './styles';
import PortStatus from '../../components/portStatus';

const SummaryItems = ({ name, status, children }) => (
  <div className="summary-item-wrapper">
    <PortStatus name={name} status={status} className='port-status-items' />
    <div className="summary-children-wrapper">
      {children.map((child) => (
        <div className="summary-children-row">
          <div className={`summary-children`} >
            {`${child.name} : ${child.value}`}
          </div>
          <div className={`summary-item summary-item-${child.status}`}></div>
        </div>
      ))}
    </div>
  </div>
);

export default SummaryItems;
