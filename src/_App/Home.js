

import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Card, Button } from 'react-bootstrap'
import AboutCard from './About/Card'

//import {HubotIcon} from '@primer/octicons-react'
import { GoHubot as RobotIcon} from 'react-icons/go'

import { AiOutlineDashboard as DashboardIcon} from 'react-icons/ai'
//import { FiTwitter as  TwitterIcon} from 'react-icons/fi'
import {
    VscTwitter as TwitterIcon //, VscHubot as RobotIcon
} from 'react-icons/vsc'

export default function Home() {
    const history = useHistory()

    function redirectTweetCollection(event) {
        event.preventDefault()
        history.push("/tweet-collection")
    }

    function redirectOpinionAnalysis(event) {
        event.preventDefault()
        history.push("/opinion-analysis")
    }

    function redirectBotAnalysis(event) {
        event.preventDefault()
        history.push("/bot-analysis")
    }

    return (
        <Container fluid>

            <Card>
                <Card.Body>
                    <Card.Title><h2>Bots and Disinformation in Social Networks: The Impeachment of Donald Trump</h2></Card.Title>

                    <Card.Text class="lead">
                        A research project by Michael J Rossetti and Tauhid Zaman.
                    </Card.Text>

                    <Card.Text>
                        Disinformation is
                        {/*
                            <a href="https://www.merriam-webster.com/dictionary/disinformation">defined as</a>
                        */}

                        {" "}  "false information deliberately and often covertly spread (as by the planting of rumors) in order to influence public opinion or obscure the truth."

                    </Card.Text>

                    <Card.Text>
                        Disinformation can lead to dangerous and violent events, most notably exemplified by the Trump Capitol Insurrection of 2021, in which armed supporters of Donald Trump stormed the US Capitol building with intentions of harming members of congress.
                        {" "}But what precipitated these events?
                    </Card.Text>

                    <Card.Text>
                        {" "}In our paper, we analyze the spread of disinformation on Twitter about the 2020 Impeachment of Donald Trump, and the role of automated accounts known as "bots" in amplifying this content across the social network.
                    </Card.Text>


                    <Card.Text>
                        For more information, click the links below...
                    </Card.Text>


                    <Row className={{textAlign:"center"}}>
                        <Col>
                            <Button size="lg" variant="outline-primary" style={{width:"205px"}} onClick={redirectTweetCollection}>
                                <span style={{marginRight:"8px"}}><TwitterIcon verticalAlign="middle"/></span>
                                Tweet Collection
                            </Button>
                        </Col>
                        <Col>
                            <Button size="lg" variant="outline-primary" style={{width:"205px"}} onClick={redirectOpinionAnalysis}>
                                <span style={{marginRight:"8px"}}><DashboardIcon /></span>
                                Opinion Analysis
                            </Button>
                        </Col>
                        <Col>
                            <Button size="lg" variant="outline-primary" style={{width:"205px"}} onClick={redirectBotAnalysis}>
                                <span style={{marginRight:"8px"}}><RobotIcon verticalAlign="middle"/></span>
                                Bot Analysis
                            </Button>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

        </Container>

    )
}
