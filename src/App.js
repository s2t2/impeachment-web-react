import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About"
import Mainmenu from "./Mainmenu"
import DashboardOne from "./dashboards/DashboardOne"
import DashboardTwo from "./dashboards/DashboardTwo"
import DashboardThree from "./dashboards/DashboardThree"
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import {
  LinkContainer
} from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import Sidebar from './Sidebar';




function App() {
  return (
    < Router >
      <div className="App">
        
        <Mainmenu />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard-one" component={DashboardOne} />
          <Route path="/dashboard-two" component={DashboardTwo} />
          <Route path="/dashboard-three" component={DashboardThree} />
        </Switch>

       
        
      </div>
    </Router>
  );
}


const Home = () => (
  <Container fluid className="no-padding">
    <Row>
      <Col sm={2}>

        <Sidebar />

      </Col>
      <Col sm={10}>

        <Container fluid className="mt-70">
          <h3 className="herotitle">Home</h3>
          <Row>
            <Col>
              <Card>

                <Card.Body>
                  <Card.Text>
                    Line Chart
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>

      </Col>
    </Row>

  </Container>
);

export default App;
