import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App.js';
//import App from './_NavigableApp/App.js';
//import App from './_Dashboards/UserOpinion/Dashboard.js';
import Dial from './_Dashboards/UserOpinion/Dial.js';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<React.StrictMode><Dial score={0.86}/></React.StrictMode>, document.getElementById('root'));
