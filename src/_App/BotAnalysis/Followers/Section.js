
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//import DetectionChart from "../Detection/DetectionChart"

export default function BotFollowersSection() {

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Follower Networks</h3></Card.Title>

                    <Card.Text>
                        The graphs below present the network of users who follow bots in each <a href="/bot-opinions">bot opinion community</a>.
                    </Card.Text>


                </Card.Body>
            </Card>
        </Container>
    )
}
