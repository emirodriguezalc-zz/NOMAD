import React from 'react';
import ThumbComponent from '../../components/thumb';
import tvData from '../../data/thumbData.json';
import './styles'

const thumb = () => (
  <div className='nomad-thumb-items-wrapper'>
    <div className='nomad-thumb-items'>
      {
        tvData.map((item, i) => i < 6 && <ThumbComponent title={item.title} serviceId={item.serviceId} />)
      }
    </div>

    <div className='nomad-thumb-items'>
      {
        tvData.map((item, i) => i > 5 && i < 12 && <ThumbComponent title={item.title} serviceId={item.serviceId} />)
      }
    </div>

    <div className='nomad-thumb-items'>
      {
        tvData.map((item, i) => i > 11 && i < 17 && <ThumbComponent title={item.title} serviceId={item.serviceId} />)
      }
    </div>
  </div>
);

export default thumb;
