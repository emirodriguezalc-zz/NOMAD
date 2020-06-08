import React from 'react';
import './styles.scss'
import notFoundImage from '../../images/notFound.png'

const NotFound = ({ }) => (
  <div className="not-found-wrapper">
    <h1 className="not-found-title">Sorry but ... 404 Not Found</h1>
    <img className="not-found-img" src={notFoundImage} />
  </div>
);

export default NotFound;
