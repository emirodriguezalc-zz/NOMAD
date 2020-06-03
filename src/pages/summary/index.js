import React from 'react';
import './styles'
import hardware from '../../images/hardware.png';
import portDictionary from './portDictionary.json'

const summary = () => (
  <div className="summary-wrapper">
    <h1 className="summary-title">Summary</h1>
    <div className='nomad-hardware-containter'>
      <img className="nomad-hardware-image" src={hardware} alt="hardware image" />
      <div className='nomad-hardware-port-wrapper'>
        <div className="nomad-hardware-port-naming">
          {portDictionary.map((item, index) => {
            const customClassName = (item.name+index).toLowerCase().replace(/ |\//g,'');
            console.log(customClassName)
            return (
              <div className={`nomad-hardware-port-name ${customClassName}`}>{item.name}</div>
            )
          })
          }
        </div>
      </div>
    </div>
  </div>
);

export default summary
