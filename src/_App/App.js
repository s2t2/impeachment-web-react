
import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom'
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

//import Home from './Home.js'
import About from './About.js'
import sidebar from './sidebar.js'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

export default function App() {
    ReactGA.pageview(window.location.href)

    // ROUTES

    var sidebarRoutes = []

    sidebar.forEach(function(page){
        sidebarRoutes.push(
            <Route key={page["key"]} path={`/${page["key"]}`} component={page["component"]} />
        )

        page["sections"].forEach(function(section){
            sidebarRoutes.push(
                <Route key={section["key"]} path={`/${section["key"]}`} component={section["component"]} />
            )
        })
    })

    // LINKS

    //var sidebarLinks = [] // used in mobile nav
    var pageLinks = [] // used in mobile nav

    var sidebarSections = sidebar.map(function(page){
        var pageLink = <NavLink key={page["key"]} to={`/${page['key']}`} activeClassName="active">{page["title"]}</NavLink>
        pageLinks.push(pageLink)

        var sectionLinks = page["sections"].map(function(section){
            var sectionLink = <NavLink key={section["key"]} to={`/${section['key']}`} activeClassName="active">{section["title"]}</NavLink>
            //sidebarLinks.push(sectionLink)
            return sectionLink
        })
        return (
            <span key={page["key"]}>
                <h6 className="mobile-dasbhoard-menu-title">{page["title"]}</h6>

                <div className="mobile-dasbhoard-menu">
                    {sectionLinks}
                </div>
            </span>
        )
    })




    var newSidebar = sidebar.map(function(page){
        var sectionLinks = page["sections"].map(function(section){
            var sectionLink = <li key={section["key"]} className="new-sidebar-list-item">
                <NavLink key={section["key"]} to={`/${section['key']}`} activeClassName="active">{section["title"]}</NavLink>
            </li>
            return sectionLink
        })
        return (
            <span key={page["key"]}>
                <h6 className="new-sidebar-heading">
                    <NavLink key={page["key"]} to={`/${page['key']}`} activeClassName="active">{page["title"]}</NavLink>
                </h6>
                <ul className="new-sidebar-list">
                    {sectionLinks}
                </ul>
            </span>
        )
    })


    return (
        <Router>
            <div className="App">

                <div className="d-none d-lg-block d-md-block d-xl-block">
                    <Navbar fixed="top" bg="light">
                        <Navbar.Brand href="/" style={{fontSize:22}}>Impeachment Tweet Analysis</Navbar.Brand>

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
                                {sidebarSections}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <Container fluid className="no-padding">
                    <Row>
                        <Col md={2}>
                            <div className="new-sidebar-wrapper-root">
                                <div className="new-sidebar d-none d-md-block d-sm-none">
                                    <Nav sticky="top" defaultActiveKey="/" className="flex-column">
                                        <div className="new-sidebar-wrapper">
                                            {newSidebar} {/* {sidebarSections} {sidebarLinks} {pageLinks} */}
                                        </div>
                                    </Nav>
                                </div>
                            </div>
                        </Col>

                        <Col md={10} className="page">
                            <Switch>
                                {/* <Route path="/" exact component={Home} /> */}
                                <Route path="/about" component={About} />
                                {sidebarRoutes}

                                <Route exact path="/"><Redirect to="/bot-impact" /></Route>
                                <Route exact path="/bot-classification"><Redirect to="/bot-detection" /></Route>
                                <Route exact path="/bot-clustering"><Redirect to="/bot-similarity" /></Route>
                                <Route exact path="/bot-communities"><Redirect to="/bot-similarity" /></Route>
                                <Route exact path="/bot-networks"><Redirect to="/bot-similarity" /></Route>

                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
}
