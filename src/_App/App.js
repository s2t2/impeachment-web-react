
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

import Home from './Home.js'
import About from './About.js'

import TweetCollectionPage from './TweetCollection/Page'

import BotAnalysisPage from './BotAnalysis/Page'
import BotClassification from './BotAnalysis/Classification/Section'
import BotCommunityClustering from "./BotAnalysis/CommunityClustering/Section"
import BotCommunityActivity from './BotAnalysis/CommunityActivity/Section'
import BotCommunityLanguage from './BotAnalysis/CommunityLanguage/Section'
import BotImpact from './BotAnalysis/Impact/Section'

import OpinionAnalysisPage from './OpinionAnalysis/Page'
import OpinionModels from './OpinionAnalysis/Models/Section'
import UserOpinions from './OpinionAnalysis/User/Section'
import TopUserOpinions from './OpinionAnalysis/TopUsers/Section'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKER_ID, {debug: true})

var sidebar = [
    {
        "key": "tweet-collection",
        "text": "I. Tweet Collection",
        "component": TweetCollectionPage,
        "links": [
            {"key": "tweet-collection", "text": "Tweet Collection",  "component": TweetCollectionPage},
        ]
    },
    {
        "key": "bot-analysis",
        "text": "II. Bot Analysis",
        "component": BotAnalysisPage,
        "links": [
            {"key": "bot-classification", "text": "Bot Classification",  "component": BotClassification},
            {"key": "bot-community-clustering", "text": "Bot Community Clustering",  "component": BotCommunityClustering},
            {"key": "bot-community-activity", "text": "Bot Community Activity",  "component": BotCommunityActivity},
            {"key": "bot-community-language", "text": "Bot Community Language",  "component": BotCommunityLanguage},
            {"key": "bot-impact", "text": "Bot Impact",  "component": BotImpact},
        ]
    },
    {
        "key": "opinion-analysis",
        "text": "III. Opinion Analysis",
        "component": OpinionAnalysisPage,
        "links": [
            {"key": "opinion-models", "text": "Opinion Models",  "component": OpinionModels},
            {"key": "user-opinions", "text": "User Opinions",  "component": UserOpinions},
            {"key": "top-user-opinions", "text": "Top User Opinions",  "component": TopUserOpinions},
        ]
    }
]

export default function App() {

    // ROUTES

    var sidebarRoutes = []
    sidebar.forEach(function(section){
        sidebarRoutes.push(
            <Route key={section["key"]} path={section["href"]} component={section["component"]} />
        )

        section["links"].forEach(function(link){
            sidebarRoutes.push(
                <Route key={link["key"]} path={link["href"]} component={link["component"]} />
            )
        })
    })

    // LINKS

    var sidebarLinks = []
    var sidebarSectionLinks = []
    var sidebarSections = sidebar.map(function(section){
        section["href"] = `/${section['key']}`

        var sectionLink = <NavLink key={section["key"]} to={section["href"]} activeClassName="active">{section["text"]}</NavLink>
        sidebarSectionLinks.push(sectionLink)

        var pageLinks = section["links"].map(function(link){
            link["href"] = `/${link['key']}`
            var navLink = <NavLink key={link["key"]} to={link["href"]} activeClassName="active">{link["text"]}</NavLink>
            sidebarLinks.push(navLink)
            return navLink
        })
        return (
            <span key={section["key"]}>
                <h6 className="mobile-dasbhoard-menu-title">{section["text"]}</h6>

                <div className="mobile-dasbhoard-menu">
                    {pageLinks}
                </div>
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
                            <div className="sidebarWrapperRoot">
                                <div className="sidebar d-none d-md-block d-sm-none">
                                    <Nav sticky="top" defaultActiveKey="/" className="flex-column">
                                        <div className="sidebarWrapper">
                                            {sidebarSectionLinks} {/* {sidebarSections} {sidebarLinks} {sidebarSectionLinks} */}
                                        </div>
                                    </Nav>
                                </div>
                            </div>
                        </Col>

                        <Col md={10} style={{paddingTop:70}}>
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
