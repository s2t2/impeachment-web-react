import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Mainmenu from "./layouts/Mainmenu"
import DashboardOne from "./dashboards/DashboardOne"
import DashboardTwo from "./dashboards/DashboardTwo"
import DashboardThree from "./dashboards/DashboardThree"
import DashboardFour from "./dashboards/DashboardFour"
import DashboardFive from "./dashboards/DashboardFive"
import DashboardSix from "./dashboards/DashboardSix"
import DashboardSeven from "./dashboards/DashboardSeven"
import AltHome from './_NavigableApp/App.js';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';





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

        </Switch>



      </div>
    </Router>
  );
}




export default App;
