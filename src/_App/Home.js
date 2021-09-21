

import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap' // Row, Col, Jumbotron,
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
                    <Card.Title><h2>Bots, Disinformation, and the (First) Trump Impeachment</h2></Card.Title>

                    <Card.Text class="lead">
                        A research project by Michael Rossetti and Tauhid Zaman
                    </Card.Text>
                    <Card.Text>
                        We collect tweets about the (First) Trump Impeachment, identify automated accounts known as "bots", analyze their behavior, and assess their impact on the conversation.
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
