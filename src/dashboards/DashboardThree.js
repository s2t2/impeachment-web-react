import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Sidebar from '../Sidebar';

import CustomActiveShapePieChart from '../charts/CustomActiveShapePieChart';

import TwoSimplePieChart from '../charts/TwoSimplePieChart';

import SimpleRadarChart from '../charts/SimpleRadarChart';

import SimpleRadialBarChart from '../charts/SimpleRadialBarChart';





function DasbhoardThree() {
  return (
    <Container fluid className="no-padding">
      <Row>
        <Col sm={2}>

          <Sidebar />

        </Col>
        <Col sm={10}>

          <Container fluid className="mt-70">
            <h3 className="herotitle">Dashboard Two</h3>
            <Row>
              <Col>
                <Card>
                
                  <Card.Body>
                    <CustomActiveShapePieChart />
                    <Card.Text>
                      Custom Active Shape Pie Chart
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                 
                  <Card.Body>
                    <TwoSimplePieChart />
                    <Card.Text>
                      Two Simple Pie Chart
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                 
                  <Card.Body>
                    <SimpleRadarChart />
                    <Card.Text>
                      Simple Radar Chart
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                 
                  <Card.Body>
                    <SimpleRadialBarChart />
                    <Card.Text>
                      Simple Radial Bar Chart
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

export default DasbhoardThree;