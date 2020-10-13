
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
import AltAbout from "../_Dashboards/About/Page.js"

import TweetCollection from "./TweetCollection/Section.js"
import BotClassification from "./BotClassification/Section.js"
import BotCommunities from "./BotCommunities/Section.js"
import BotCommunityAnalysis from "./BotCommunityAnalysis/Section.js"
import BotCommunityLanguage from './BotCommunityLanguage/Section'
import BotCommunitySentiment from './BotCommunitySentiment/Section'
import BotImpact from './BotImpact/Section'
import UserOpinion from './UserOpinion/Section'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

export default function App() {

    var sidebar = [
        {
            "key": "tweet-collection",
            "text": "I. Tweet Collection",
            "links": [
                {"key": "tweet-collection", "text": "Tweet Collection",  "component": TweetCollection, "visible": true},
            ]
        },
        {
            "key": "bot-classification",
            "text": "II. Bot Classification",
            "links": [
                {"key": "bot-classification", "text": "Bot Classification",  "component": BotClassification, "visible": true},
            ]
        },
        {
            "key": "bot-communities",
            "text": "III. Bot Communities",
            "links": [
                {"key": "bot-community-clustering", "text": "Bot Communities",  "component": BotCommunities, "visible": true},
                {"key": "bot-community-analysis", "text": "Bot Community Analysis",  "component": BotCommunityAnalysis, "visible": true},
                {"key": "bot-community-language", "text": "Bot Community Language",  "component": BotCommunityLanguage, "visible": true},
                {"key": "bot-community-sentiment", "text": "Bot Community Sentiment",  "component": BotCommunitySentiment, "visible": true},
            ]
        },
        {
            "key": "opinion-analysis",
            "text": "IV. Bot Impact",
            "links": [
                {"key": "bot-impact", "text": "Bot Impact",  "component": BotImpact, "visible": true},
            ]
        },
        {
            "key": "opinion-analysis",
            "text": "V. Opinion Analysis",
            "links": [
                {"key": "opinion-analysis", "text": "Opinion Analysis",  "component": UserOpinion, "visible": true},
            ]
        }
    ]

    var sidebarLinks = []
    var sidebarSections = sidebar.map(function(section){
        var sectionLinks = section["links"].map(function(link){
            link["href"] = `/${link['key']}`
            var navLink = <NavLink key={link["key"]} to={link["href"]} activeClassName="active">{link["text"]}</NavLink>
            sidebarLinks.push(navLink)
            return navLink
        })
        return (
            <span key={section["key"]}>
                <h6 className="mobile-dasbhoard-menu-title">{section["text"]}</h6>

                <div className="mobile-dasbhoard-menu">
                    {sectionLinks}
                </div>
            </span>
        )
    })

    var sidebarRoutes = []
    sidebar.forEach(function(section){
        section["links"].forEach(function(link){
            sidebarRoutes.push(<Route key={link["key"]} path={link["href"]} component={link["component"]} />)
        })
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
                                <Nav.Link href="/alt-about">Alt About</Nav.Link>
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
                                    <NavLink to="/alt-about" activeClassName="active">Alt About</NavLink>
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
                            <div className="sidebarWrapperRoot">
                                <div className="sidebar d-none d-md-block d-sm-none">
                                    <Nav sticky="top" defaultActiveKey="/" className="flex-column">
                                        <div className="sidebarWrapper">
                                            {/* {sidebarSections} {sidebarLinks} */}
                                            {sidebarLinks}
                                        </div>
                                    </Nav>
                                </div>
                            </div>
                        </Col>

                        <Col md={10} style={{paddingTop:70}}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/alt-about" component={AltAbout} />
                                {sidebarRoutes}
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
}
