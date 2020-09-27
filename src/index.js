import React from 'react';
import ReactDOM from 'react-dom';

//import App from './NavigableApp/App.js';
//import Dashboard from './Dashboards/Demo/Dashboard.js';
import Dashboard from './Dashboards/UsersMostRetweeted/Dashboard.js';

import 'bootstrap/dist/css/bootstrap.min.css';

//ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'));
ReactDOM.render(<React.StrictMode><Dashboard/></React.StrictMode>, document.getElementById('root'));
