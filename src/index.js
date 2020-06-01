import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/app/App';
import * as serviceWorker from './serviceWorker';
import './fonts/PathwayGothicOne-Regular.ttf'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
),
  document.getElementById('root'));

serviceWorker.unregister();
