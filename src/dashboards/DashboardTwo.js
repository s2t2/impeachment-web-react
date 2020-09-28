import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Sidebar from '../Sidebar';
import WelcomeAlert from "../alerts/WelcomeAlert"

import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import AreaChart from '../charts/AreaChart';
import TreeChart from '../charts/TreeChart';

function DasbhoardTwo() {
  return (
    <Container fluid className="no-padding">
      <Row>
        <Col sm={2}>

          <Sidebar />

        </Col>
        <Col sm={10}>

          <Container fluid className="mt-70">
            <WelcomeAlert />
            <h3 className="herotitle">Dashboard Two</h3>
            <Row>
              <Col>
                <Card>
                  <LineChart />
                  <Card.Body>
                    <Card.Text>
                      Line Chart
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <BarChart />
                  <Card.Body>
                    <Card.Text>
                      Bar Chart
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <AreaChart />
                  <Card.Body>
                    <Card.Text>
                      Area Chart
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <TreeChart />
                  <Card.Body>
                    <Card.Text>
                      Tree Chart
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
}

export default DasbhoardTwo;