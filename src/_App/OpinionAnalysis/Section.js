
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'


export default function SentimentAnalysis() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Sentiment Analysis</h2></Card.Title>

                    <Card.Text>
                        Based on the <a href="/bot-community-language">top hashtags used by each bot community</a>, we trained a binary classifier model to predict which community language patterns any given tweet more closely resembles.
                    </Card.Text>

                </Card.Body>
            </Card>


             <Card>
                <Card.Body>
                    <Card.Title><h3>Data Labeling</h3></Card.Title>

                    <Card.Text>
                        ...
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Model Training and Evaluation</h3></Card.Title>

                    <Card.Text>
                        ...
                    </Card.Text>

                </Card.Body>
            </Card>

        </Container>
    )
}
