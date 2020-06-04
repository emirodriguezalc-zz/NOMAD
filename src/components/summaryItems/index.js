import React from 'react';
import './styles';
import PortStatus from '../../components/portStatus';

const SummaryItems = ({ name, status, children }) => (
  <div className="summary-item-wrapper">
    <PortStatus name={name} status={status} />
    {children.map((child) => (
      <div className="summary-item-children-wrapper">
        <div className={`summary-item-children`} >
          {`${child.name} : ${child.value}`}
        </div>
        <div className={`summary-item summary-item-${child.status}`}></div>
      </div>
    ))}
  </div>
);

export default SummaryItems;
