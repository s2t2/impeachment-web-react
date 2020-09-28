import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Sidebar from '../Sidebar';

import HorizontalBarChart from '../charts/HorizontalBarChart';

import ToggleBtn from '../buttons/ToggleBtn';



function DasbhoardOne() {
  return (
    <Container fluid className="no-padding">
      <Row>
        <Col sm={2}>

          <Sidebar />
          
        </Col>
        <Col sm={10}>

          <Container fluid className="mt-70">
            <h3 className="herotitle">Dashboard One</h3>
            <Row>
              <Col>
                <Card>
                  
                  <HorizontalBarChart />

                  <Card.Body>
                    <Card.Text>
                      
                      Most Retweeted By
                      
                       
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

export default DasbhoardOne;