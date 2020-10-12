
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import LeftNav from './LeftNav.js';

export default function Home() {
    return (
        <Container fluid className="no-padding">
            <Row>
                <Col md={2}>
                    <LeftNav/>
                </Col>

                <Col md={10}>
                    <Container fluid className="mt-70">
                        <h2>Home</h2>

                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">Hello World</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">Hello World</Card.Text>
                            </Card.Body>
                        </Card>

                    </Container>
                </Col>
            </Row>

        </Container>
    )
}
