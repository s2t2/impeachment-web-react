import React, { PureComponent } from 'react';
//import { MemoryRouter, Switch, Route } from 'react-router-dom';
//import { LinkContainer } from 'react-router-bootstrap';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import Nav from './PrototypeNav';
//import Footer from './PrototypeFooter';

import AboutPage from '../_Dashboards/About/Page.js';
import PlotlyDemo from '../_Dashboards/PlotlyDemo/Dashboard.js';
import RechartsDemo from '../_Dashboards/RechartsDemo/Dashboard.js';
import UsersMostRetweeted from '../_Dashboards/UsersMostRetweeted/Dashboard.js';
import StatusesMostRetweeted from '../_Dashboards/StatusesMostRetweeted/Dashboard.js';
import TopProfileTags from '../_Dashboards/TopProfileTags/Dashboard.js';
import TopStatusTags from '../_Dashboards/TopStatusTags/Dashboard.js';
import UserOpinion from '../_Dashboards/UserOpinion/Dashboard.js';
import UserOpinionsMostFollowed from '../_Dashboards/UsersMostFollowed/Dashboard.js';

import ReactGA from "react-ga"

const GA_TRACKER_ID = process.env.REACT_APP_GA_TRACKER_ID

ReactGA.initialize(GA_TRACKER_ID)
console.log("GA INIT:", GA_TRACKER_ID)

export default class App extends PureComponent {

  componentDidMount(){
    console.log("APP DID MOUNT")

    ReactGA.pageview(window.location.pathname + window.location.search)
    console.log("GA:", window.location.pathname + window.location.search)

    ReactGA.event({category: "Developer", action: "Testing, 123"})
  }

  render(){
    return (
      <span>
        <Alert key="warning" variant="warning">
          FYI: This website is in development and may not reflect final research results.
        </Alert>

        <Container className="p-3">
            <h1 className="header">Impeachment Tweet Analysis</h1>

            <Tab.Container id="left-tabs-example" defaultActiveKey="home">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item><Nav.Link eventKey="about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="plotly_demo">Plotly Demo</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="recharts_demo">Recharts Demo</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="top_profile_tags">Bot Profile Hashtags</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="top_status_tags">Bot Tweet Hashtags</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="top_statuses">Bot Retweets</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="top_users">Bot Retweeted Users</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="user_opinions_most_followed">Mean Opinions</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="user_opinion">User Opinions</Nav.Link></Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="about"><AboutPage/></Tab.Pane>
                    <Tab.Pane eventKey="plotly_demo"><PlotlyDemo/></Tab.Pane>
                    <Tab.Pane eventKey="recharts_demo"><RechartsDemo/></Tab.Pane>
                    <Tab.Pane eventKey="top_profile_tags"><TopProfileTags/></Tab.Pane>
                    <Tab.Pane eventKey="top_status_tags"><TopStatusTags/></Tab.Pane>
                    <Tab.Pane eventKey="top_statuses"><StatusesMostRetweeted/></Tab.Pane>
                    <Tab.Pane eventKey="top_users"><UsersMostRetweeted/></Tab.Pane>
                    <Tab.Pane eventKey="user_opinions_most_followed"><UserOpinionsMostFollowed/></Tab.Pane>
                    <Tab.Pane eventKey="user_opinion"><UserOpinion/></Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
        </Container>

      </span>
    )

  }

}
