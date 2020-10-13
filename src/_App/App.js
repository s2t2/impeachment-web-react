
import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import ReactGA from 'react-ga'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from "./Home.js"
import About from "./About.js"

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

export default function App() {

    var sidebarLinks = [
        {"href":"/tweet-collection",     "key":"tweet-collection",      "text": "I. Tweet Collection",         "visible": true},
        {"href":"/bot-classification",   "key":"bot-classification",    "text": "II. Bot Classification",      "visible": true},
        {"href":"/bot-clustering",       "key":"bot-clustering",        "text": "III. Bot Clustering",         "visible": true},
        {"href":"/bot-impact",           "key":"bot-impact",            "text": "IV. Bot Impact",              "visible": true},
        {"href":"/opinion-analysis",     "key":"opinion-analysis",      "text": "V. Opinion Analysis",         "visible": true},
    ]
    .filter(function(link){
        return link["visible"] === true
    })
    .map(function(link){
        //console.log(link)
        return <NavLink key={link["key"]} to={link["href"]} activeClassName="active">{link["text"]}</NavLink>
    })

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
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
}
