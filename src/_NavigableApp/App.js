import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { LinkContainer } from 'react-router-bootstrap';

import PlotlyDemo from '../_Dashboards/PlotlyDemo/Dashboard.js'; // implicit alias
import RechartsDemo from '../_Dashboards/RechartsDemo/Dashboard.js'; // implicit alias
import UsersMostRetweeted from '../_Dashboards/UsersMostRetweeted/Dashboard.js'; // implicit alias
import StatusesMostRetweeted from '../_Dashboards/StatusesMostRetweeted/Dashboard.js'; // implicit alias
//import UserOpinion from '../_Dashboards/UserOpinion/Dashboard.js'; // implicit alias

//import './App.css';

// TODO
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
//const TopProfileTags = () => <h2>Top Profile Tags</h2>;
//const TopStatusTags = () => <h2>Top Status Tags</h2>;

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
                <Nav.Item><Nav.Link eventKey="top_users">Users Most Retweeted</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="top_statuses">Statuses Most Retweeted</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="home"><Home/></Tab.Pane>
                <Tab.Pane eventKey="about"><About/></Tab.Pane>
                <Tab.Pane eventKey="top_users"><UsersMostRetweeted/></Tab.Pane>
                <Tab.Pane eventKey="top_statuses"><StatusesMostRetweeted/></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

    </Container>

  </span>
);

export default App;
