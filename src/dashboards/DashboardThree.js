import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Sidebar from '../layouts/Sidebar';
import WelcomeAlert from "../alerts/WelcomeAlert"

import CustomActiveShapePieChart from '../charts/CustomActiveShapePieChart';

import TwoSimplePieChart from '../charts/TwoSimplePieChart';

import SimpleRadarChart from '../charts/SimpleRadarChart';

import SimpleRadialBarChart from '../charts/SimpleRadialBarChart';

import BarChartCustomContentTooltip from '../charts/BarChartCustomContentTooltip';

import GaugeChart from '../charts/GaugeChart';





function DasbhoardThree() {
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
            <Row>
              <Col>
                <Card>

                  <Card.Body>
                    <BarChartCustomContentTooltip />
                    <Card.Text>
                      Simple Radar Chart
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>

                  <Card.Body>
                    <GaugeChart />
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