import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import Dashboard from '../Dashboards/UsersMostRetweeted/Dashboard.js';

import './App.css';

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

// NOTE: inside the Switch, the "/" route needs to be listed last
const App = () => (
  <MemoryRouter>
    <Container className="p-3">

        <h1 className="header">Impeachment Tweet Analysis</h1>

        <ButtonToolbar className="custom-btn-toolbar">
          <LinkContainer to="/"><Button>Home</Button></LinkContainer>
          <LinkContainer to="/about"><Button>About</Button></LinkContainer>
          <LinkContainer to="/users_most_retweeted"><Button>Users Most Retweeted</Button></LinkContainer>
        </ButtonToolbar>

        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users_most_retweeted"><Dashboard /></Route>
          <Route path="/"><Home /></Route>
        </Switch>

    </Container>

  </MemoryRouter>
);

export default App;
