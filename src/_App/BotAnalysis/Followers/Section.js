
import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import {legendBlue, legendRed} from "../../Utils/Colors"
//import ExampleGraph from "./ExampleGraph"
import ExampleGraph from "./ExampleSizemeGraph"

export default function BotFollowersSection() {

    //const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
    //const [displayHeight, setDisplayHeight] = useState(window.innerHeight);
    //
    //window.addEventListener('resize', () => {
    //    setDisplayWidth(window.innerWidth);
    //    setDisplayHeight(window.innerHeight);
    //})

    return (

        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Follower Networks</h3></Card.Title>

                    <Card.Text>
                        The graphs below present the network of users who follow bots in each <a href="/bot-opinions">bot opinion community</a>.
                    </Card.Text>

                    {/* <p>WIDTH: {displayWidth}</p> */}

                    <Row>
                        <Col sm={12} md={12} lg={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Text className="app-center">Anti-Trump Bot Followers</Card.Text>

                                    <ExampleGraph key="network-0" nodeColor={legendBlue}/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={12} lg={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Text className="app-center">Pro-Trump Bot Followers</Card.Text>

                                    <ExampleGraph key="network-1" nodeColor={legendRed}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Container>
    )
}
