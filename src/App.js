import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import ReactGA from 'react-ga'

import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home"
import About from "./pages/about/About"
import AboutScroll from "./pages/about/AboutScroll"
import AltHome from './_NavigableApp/App.js'

import MainMenu from "./layouts/MainMenu"
//import StickyMenu from "./layouts/StickyMenu"

// import DashboardOne from "./dashboards/DashboardOne"
// import DashboardTwo from "./dashboards/DashboardTwo"
// import DashboardThree from "./dashboards/DashboardThree"
// import DashboardFour from "./dashboards/DashboardFour"
// import DashboardFive from "./dashboards/DashboardFive"
// import DashboardSix from "./dashboards/DashboardSix"
// import DashboardSeven from "./dashboards/DashboardSeven"
// import DashboardEight from "./dashboards/DashboardEight"

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

const IN_DEV_MODE = (process.env.REACT_APP_NODE_ENV === "development") || false // todo: figure out why create react app doesn't respect normal NODE_ENV changes

export default function App() {

    // TODO: conditional Routes based on ...
    var navRoutes = [
        {"path":"/alt-home",     "key": "alt-home",     "component": AltHome,       "visible": IN_DEV_MODE},
        {"path":"/about",        "key": "about",        "component": About,         "visible": true},
        {"path":"/about-scroll", "key": "about-scroll", "component": AboutScroll,   "visible": IN_DEV_MODE},
    ]
    .filter(function(route){
        return route["visible"] === true
    })
    .map(function(route){
        //console.log(route)
        return <Route key={route["key"]} path={route["path"]} component={route["component"]} />
    })
    navRoutes.unshift(<Route path="/" exact component={Home} />) // unshift appends to first position in list

    return (
        <Router>
            <div className="App">
                <MainMenu />

                <Switch>
                    {navRoutes}

                    {/*}
                    <Route path="/alt-home" component={AltHome} />
                    <Route path="/about" component={About} />
                    <Route path="/about-scroll" component={AboutScroll} />

                    <Route path="/dashboard-one" component={DashboardOne} />
                    <Route path="/dashboard-two" component={DashboardTwo} />
                    <Route path="/dashboard-three" component={DashboardThree} />
                    <Route path="/dashboard-four" component={DashboardFour} />
                    <Route path="/dashboard-five" component={DashboardFive} />
                    <Route path="/dashboard-six" component={DashboardSix} />
                    <Route path="/dashboard-seven" component={DashboardSeven} />
                    <Route path="/dashboard-eight" component={DashboardEight} />
                    */}
                </Switch>
            </div>
        </Router>
    )
}
