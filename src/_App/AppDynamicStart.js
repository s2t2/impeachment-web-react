
import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import ReactGA from 'react-ga'
//import {groupBy, values} from "lodash"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from "./Home.js"
import About from "./About.js"

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

export default function App() {

    var sidebar = [
        {"key":"tweet-collection",      "group":   "I. Tweet Collection",    "text": "Dashboard 1",     "component": Home,    "visible": true},
        {"key":"tweet-collection",      "group":   "I. Tweet Collection",    "text": "Dashboard 2",     "component": Home,    "visible": true},
        {"key":"tweet-collection",      "group":   "I. Tweet Collection",    "text": "Dashboard 3",     "component": Home,    "visible": true},
        {"key":"bot-classification",    "group":  "II. Bot Classification",  "text": "My Dashboard 1",  "component": Home,    "visible": true},
        {"key":"bot-classification",    "group":  "II. Bot Classification",  "text": "My Dashboard 2",  "component": Home,    "visible": true},
        {"key":"bot-classification",    "group":  "II. Bot Classification",  "text": "My Dashboard 3",  "component": Home,    "visible": true},
        {"key":"bot-clustering",        "group": "III. Bot Clustering",      "text": "My Dashboard",    "component": Home,    "visible": true},
        {"key":"bot-impact",            "group":  "IV. Bot Impact",          "text": "Dashboard",       "component": Home,    "visible": true},
        {"key":"bot-impact",            "group":  "IV. Bot Impact",          "text": "Dashboard 2",     "component": Home,    "visible": true},
        {"key":"opinion-analysis",      "group":   "V. Opinion Analysis",    "text": "My Dashboard",    "component": Home,    "visible": true},
        {"key":"opinion-analysis",      "group":   "V. Opinion Analysis",    "text": "My Dashboard 2",  "component": Home,    "visible": true},
    ].filter(function(link){
        return link["visible"] === true
    }).map(function(link){
        link["href"] = `/${link['key']}`
        return link
    })

    var sidebarLinks = sidebar.map(function(link){
        return <NavLink key={link["key"]} to={link["href"]} activeClassName="active">{link["text"]}</NavLink>
    })
    var sidebarRoutes = sidebar.map(function(route){
        return <Route key={route["key"]} path={route["href"]} component={route["component"]} />
    })

    //var navItems = ____
    //    var sidebarLinks = ""
    //    return(
    //        <Nav className="ml-auto">
    //            <h6 className="mobile-dasbhoard-menu-title">I. Tweet Collection</h6>
//
    //            <div className="mobile-dasbhoard-menu">
    //                {sidebarLinks}
    //            </div>
    //        </Nav>
    //    )
    //}

    //console.log("GROUPS:", grps)
    //console.log("GROUPS:", _values(grps))

    //var groups = groupBy(sidebar, "group")
    //var sidebarSections = values(groupBy(sidebar, "group")).map(function(sectionName){
    //    console.log("SECTION:", sectionName)
    //})
    //debugger;

    return (
        <Router>
            <div className="App">

                <div className="d-none d-lg-block d-md-block d-xl-block">
                    <Navbar fixed="top" bg="light">
                        <Navbar.Brand href="/">Impeachment Tweet Analysis</Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div className="sidebarMobile  d-sm-block d-md-none">
                    <Navbar bg="light" collapseOnSelect expand="lg">
                        <Navbar.Brand href="/">Impeachment Tweet Analysis</Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <div className="mobile-dasbhoard-menu">
                                    <NavLink to="/about" activeClassName="active">About</NavLink>
                                </div>
                            </Nav>

                            <Nav className="ml-auto">
                                <h6 className="mobile-dasbhoard-menu-title">Dashboards</h6>

                                <div className="mobile-dasbhoard-menu">
                                   {sidebarLinks}
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <Container fluid className="no-padding">
                    <Row>
                        <Col md={2}>
                            <div className="sidebarWrapperRoot">
                                <div className="sidebar d-none d-md-block d-sm-none">
                                    <Nav sticky="top" defaultActiveKey="/" className="flex-column">
                                        <div className="sidebarWrapper">
                                            {sidebarLinks}
                                        </div>
                                    </Nav>
                                </div>
                            </div>
                        </Col>

                        <Col md={10}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/about" component={About} />
                                {sidebarRoutes}
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
}
