import React from 'react'
import ReactDOM from 'react-dom'

//import App from './App.js'
//import App from './_NavigableApp/App.js'
//import App from './_Dashboards/UsersMostFollowed/Dashboard.js'
import App from './_App/App.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import 'rc-slider/assets/index.css'

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'))
