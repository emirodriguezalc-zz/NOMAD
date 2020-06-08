import React, { useState, useEffect } from 'react';
import { BrowseRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import SideMenu from '../../components/sideMenu/index';
import summary from '../summary';
import cpu from '../cpu';
import thumb from '../thumb';
import notFound from '../notFound';
import logo from '../../images/logo.png';
import nomadLogo from '../../images/nomad-logo.png';
import bridgeHd from '../../images/bridgetech-world-hd.jpg'
import bridge from '../../images/bridgetech-world.jpg'

function App() {
  const useProgressiveImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded
  }

  const loaded = useProgressiveImage(bridgeHd);
  const placeholder = bridge;

  return (
    <div className='main-wrapper' style={{ backgroundImage: `url(${loaded || placeholder})` }}>
      <div className="main-header">
        <div className='bridge-logo-container'>BRIDGE <img src={logo} className="app-logo" alt="logo" /> TECHNOLOGIES</div>
        <div className='nomad-logo-container'> <img className="nomad-logo" src={nomadLogo} alt="logo" /></div>
      </div>
      <div className='main-content'>
        <SideMenu />
        <div className='dynamic-content'>
          <Switch>
            <Route exact path={['/', '/summary']} component={summary} />
            <Route path='/cpu' component={cpu} />
            <Route path='/thumb' component={thumb} />
            <Route component={notFound} />
          </Switch>
        </div>
      </div>
      {/*   <div className='main-footer'> Copyright © 2020 Bridge Technologies. All rights reserved</div> */}
    </div>
  );
}

export default App;
