
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

export default function UserOpinion() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>User Opinion Analysis</h2></Card.Title>
                    <Card.Text>

                        <p>After training our classifier models, we used them to predict the "impeachment opinion scores" for the remaining tweets in our dataset...</p>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
