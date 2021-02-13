

import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Card, Button } from 'react-bootstrap'
//import AboutCard from './About/Card'

import { GoHubot as RobotIcon } from 'react-icons/go'
import { AiOutlineDashboard as DashboardIcon} from 'react-icons/ai'
import { VscTwitter as TwitterIcon } from 'react-icons/vsc'

import './Home.css'

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


                    <div className="my-btn-group text-center">
                        <Button size="lg" variant="outline-primary" className="my-center-block-button" onClick={redirectTweetCollection} block>
                            <span style={{marginRight:"8px"}}><TwitterIcon verticalAlign="middle"/></span>
                            Tweet Collection
                        </Button>

                        <Button size="lg" variant="outline-primary" className="my-center-block-button" onClick={redirectOpinionAnalysis} block>
                            <span style={{marginRight:"8px"}}><DashboardIcon /></span>
                            Opinion Analysis
                        </Button>

                        <Button size="lg" variant="outline-primary" className="my-center-block-button" onClick={redirectBotAnalysis} block>
                            <span style={{marginRight:"8px"}}><RobotIcon verticalAlign="middle"/></span>
                            Bot Analysis
                        </Button>
                    </div>







                </Card.Body>
            </Card>

        </Container>

    )
}
