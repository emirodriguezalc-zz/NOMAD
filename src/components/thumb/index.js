import React, { useState, useEffect } from 'react';
import './styles'

const Thumb = ({ title, serviceId }) => {
  const [image, setImage] = useState('https://picsum.photos/95/54');

  useEffect(() => {
    const interval = setInterval(showImage, 5000);
    return () => clearInterval(interval)
  }, [image])

  const showImage = () => {
    setImage("https://picsum.photos/95/54?" + Math.random())
  }

  return (
    <div className='thumb-wrapper'>
      <div className='thumb-title'>{title}</div>
      <div className='thumb-id'>Service ID : {serviceId}</div>
      <div className="thumb-checkbox">
        <input type="checkbox" /> <div>Freeze</div>
      </div>
      <div className="thumb-img">
        <img src={image} />
      </div>
    </div>
  );
}

export default Thumb;
