import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

//import {Dashboard as PlotlyDemo} from '../Dashboards/PlotlyDemo/Dashboard.js';
//import {Dashboard as UsersMostRetweeted} from '../Dashboards/UsersMostRetweeted/Dashboard.js';
import PlotlyDemo from '../Dashboards/PlotlyDemo/Dashboard.js'; // implicit alias
import UsersMostRetweeted from '../Dashboards/UsersMostRetweeted/Dashboard.js'; // implicit alias

import './App.css';

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

// NOTE: inside the Switch, the "/" route needs to be listed last
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
          <LinkContainer to="/users_most_retweeted"><Button>Users Most Retweeted</Button></LinkContainer>
        </ButtonToolbar>

        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/plotly_demo"><PlotlyDemo /></Route>
          <Route path="/users_most_retweeted"><UsersMostRetweeted /></Route>
          <Route path="/"><Home /></Route>
        </Switch>

    </Container>

  </MemoryRouter>
);

export default App;
