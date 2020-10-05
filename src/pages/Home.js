import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Sidebar from '../layouts/Sidebar';
import WelcomeAlert from "../alerts/WelcomeAlert"

function Home() {
  return (
    <Container fluid className="no-padding">



      <Row>
        <Col md={2} >

          <Sidebar />

        </Col>
        <Col md={10}>


          <Container fluid className="mt-70">
            <WelcomeAlert />

            <h3 className="herotitle app-center">Home</h3>
            <Row>
              <Col>
                <Card>

                  <Card.Body>
                    <Card.Text className="app-center">
                      New Home
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

export default Home;