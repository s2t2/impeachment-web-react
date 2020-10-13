import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import About from "./pages/about/About"
import Mainmenu from "./layouts/Mainmenu"
import DashboardOne from "./dashboards/DashboardOne"
import DashboardTwo from "./dashboards/DashboardTwo"
import DashboardThree from "./dashboards/DashboardThree"
import DashboardFour from "./dashboards/DashboardFour"
import DashboardFive from "./dashboards/DashboardFive"
import DashboardSix from "./dashboards/DashboardSix"
import DashboardSeven from "./dashboards/DashboardSeven"
import DashboardEight from "./dashboards/DashboardEight"
import AltHome from './_NavigableApp/App.js';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

function App() {

  return (
    < Router >
      <div className="App">

        <Mainmenu />


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/alt-home" component={AltHome} />
          <Route path="/about" component={About} />
          <Route path="/dashboard-one" component={DashboardOne} />
          <Route path="/dashboard-two" component={DashboardTwo} />
          <Route path="/dashboard-three" component={DashboardThree} />
          <Route path="/dashboard-four" component={DashboardFour} />
          <Route path="/dashboard-five" component={DashboardFive} />
          <Route path="/dashboard-six" component={DashboardSix} />
          <Route path="/dashboard-seven" component={DashboardSeven} />
          <Route path="/dashboard-eight" component={DashboardEight} />

        </Switch>



      </div>
    </Router>
  );
}




export default App;
