import React from 'react';
import './styles';

const PortStatus = ({name, status, className}) => (
  <div className={`port-status-wrapper ${className}`}>
    <div className="port-status-title">{name}</div>
    <div className={`port-status port-status-${status} ${name}`}></div>
  </div>
);

export default PortStatus;
