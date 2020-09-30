import React from 'react';
//import { MemoryRouter, Switch, Route } from 'react-router-dom';
//import { LinkContainer } from 'react-router-bootstrap';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PlotlyDemo from '../_Dashboards/PlotlyDemo/Dashboard.js';
import RechartsDemo from '../_Dashboards/RechartsDemo/Dashboard.js';
import UsersMostRetweeted from '../_Dashboards/UsersMostRetweeted/Dashboard.js';
import StatusesMostRetweeted from '../_Dashboards/StatusesMostRetweeted/Dashboard.js';
import TopProfileTags from '../_Dashboards/TopProfileTags/Dashboard.js';
import TopStatusTags from '../_Dashboards/TopStatusTags/Dashboard.js';
//import UserOpinion from '../_Dashboards/UserOpinion/Dashboard.js';

// TODO
const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>

const App = () => (
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
                <Nav.Item><Nav.Link eventKey="home">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="plotly_demo">Plotly Demo</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="recharts_demo">Recharts Demo</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="top_profile_tags">Bot Profile Hashtags</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="top_status_tags">Bot Tweet Hashtags</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="top_statuses">Bot Retweets</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="top_users">Bot Retweeted Users</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="home"><Home/></Tab.Pane>
                <Tab.Pane eventKey="about"><About/></Tab.Pane>
                <Tab.Pane eventKey="plotly_demo"><PlotlyDemo/></Tab.Pane>
                <Tab.Pane eventKey="recharts_demo"><RechartsDemo/></Tab.Pane>
                <Tab.Pane eventKey="top_profile_tags"><TopProfileTags/></Tab.Pane>
                <Tab.Pane eventKey="top_status_tags"><TopStatusTags/></Tab.Pane>
                <Tab.Pane eventKey="top_statuses"><StatusesMostRetweeted/></Tab.Pane>
                <Tab.Pane eventKey="top_users"><UsersMostRetweeted/></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    </Container>

  </span>
);

export default App;
