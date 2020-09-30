import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { LinkContainer } from 'react-router-bootstrap';

import PlotlyDemo from '../_Dashboards/PlotlyDemo/Dashboard.js'; // implicit alias
import RechartsDemo from '../_Dashboards/RechartsDemo/Dashboard.js'; // implicit alias
import UsersMostRetweeted from '../_Dashboards/UsersMostRetweeted/Dashboard.js'; // implicit alias
//import UserOpinion from '../_Dashboards/UserOpinion/Dashboard.js'; // implicit alias

//import './App.css';

// TODO
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const StatusesMostRetweeted = () => <h2>Statuses Most Retweeted</h2>;
const TopProfileTags = () => <h2>Top Profile Tags</h2>;
const TopStatusTags = () => <h2>Top Status Tags</h2>;

const App = () => (
  <MemoryRouter>
    <Alert key="warning" variant="warning">
      FYI: This website is currently in development and does not necessarily reflect final research results.
    </Alert>

    <Container className="p-3">

        <h1 className="header">Impeachment Tweet Analysis</h1>

        <ButtonToolbar className="custom-btn-toolbar">
          <LinkContainer to="/"><Button>Home</Button></LinkContainer>
          <LinkContainer to="/about"><Button>About</Button></LinkContainer>
          <LinkContainer to="/plotly_demo"><Button>Plotly Chart Demo</Button></LinkContainer>
          <LinkContainer to="/recharts_demo"><Button>Recharts Chart Demo</Button></LinkContainer>
          <LinkContainer to="/users_most_retweeted"><Button>Users Most Retweeted</Button></LinkContainer>
          <LinkContainer to="/statuses_most_retweeted"><Button>Statuses Most Retweeted</Button></LinkContainer>
          <LinkContainer to="/top_profile_tags"><Button>Top Profile Hashtags</Button></LinkContainer>
          <LinkContainer to="/top_status_tags"><Button>Top Hashtags</Button></LinkContainer>
        </ButtonToolbar>

        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/plotly_demo"><PlotlyDemo /></Route>
          <Route path="/recharts_demo"><RechartsDemo /></Route>
          <Route path="/users_most_retweeted"><UsersMostRetweeted /></Route>
          <Route path="/statuses_most_retweeted"><StatusesMostRetweeted /></Route>
          <Route path="/top_profile_tags"><TopProfileTags /></Route>
          <Route path="/top_status_tags"><TopStatusTags /></Route>
        </Switch>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>Hello</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Yo</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

    </Container>

  </MemoryRouter>
);

export default App;
