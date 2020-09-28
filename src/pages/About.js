import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Sidebar from '../Sidebar';
import WelcomeAlert from "../alerts/WelcomeAlert"

function About() {
  return (
    <Container fluid className="no-padding">
      <Row>
        <Col sm={2}>

          <Sidebar />

        </Col>
        <Col sm={10}>

          <Container fluid className="mt-70">
            <WelcomeAlert />
            <h3 className="herotitle">About</h3>
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
}

export default About;