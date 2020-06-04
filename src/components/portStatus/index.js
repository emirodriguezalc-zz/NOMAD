import React from 'react';
import './styles';

const PortStatus = ({name, status}) => (
  <div className="port-status-wrapper">
    <div className="port-status-title">{name}</div>
    <div className={`port-status port-status-${status} ${name}`}></div>
  </div>
);

export default PortStatus;
