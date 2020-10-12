
import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import ReactGA from 'react-ga'

//import './App.css'

import TopNav from "./LeftNav.js"
import LeftNav from "./LeftNav.js"

import Home from "./Home.js"
import About from "./About.js"

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

export default function App() {
  return (
    <Router>
      <div className="App">

        <TopNav />
        <LeftNav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>

      </div>
    </Router>
  )
}
