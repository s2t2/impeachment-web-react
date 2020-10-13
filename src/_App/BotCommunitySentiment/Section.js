
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'


export default function BotCommunitySentiment() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Bot Community Sentiment Analysis</h2></Card.Title>
                    <Card.Text>

                        <p>We trained two different binary classifier models to determine for any given tweet, which bot community the tweet language more closely resembles.</p>







                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
