import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Sidebar from '../layouts/Sidebar';
import WelcomeAlert from "../alerts/WelcomeAlert"
import GaugeChart from '../charts/GaugeChart';





function DasbhoardFive() {
  return (
    <Container fluid className="no-padding">
      <Row>
        <Col sm={2}>

          <Sidebar />

        </Col>
        <Col sm={10}>

          <Container fluid className="mt-70">
            <WelcomeAlert />

            
            
            <Row>
              
              <Col>
                <Card>
                  <GaugeChart />

                  <Card.Body>

                    <Card.Text className="app-center">
                      Gauge Chart

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

export default DasbhoardFive;