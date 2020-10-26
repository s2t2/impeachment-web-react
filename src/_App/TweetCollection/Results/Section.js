
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//import TweetsCollectedByDay from "./tweets-collected-by-day.png"
import TweetsCollectedByDay from "./AreaChart"

export default function Section() {

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Collection Results</h3></Card.Title>

                    <Card.Text>
                        During our <a href="/collection-timeline">collection period</a>, in total, we collected 67.6 million tweets by 3.6 million unique users. Of these, 55.9 million (82.6%) were retweets by 2.7 million unique users.
                    </Card.Text>
                    {/*
                    <img src={TweetsCollectedByDay} alt="an area chart of tweets collected by day" className="img-fluid" style={{marginBottom:20}}/>
                    */ }
                    <TweetsCollectedByDay/>

                    <Card.Text>
                        NOTE: our tweet collector was down for maintenance on 12/18 and 12/19.
                    </Card.Text>

                    <Card.Text>
                        NOTE: despite running our collector continuously, we were not able to collect every single tweet about impeachment. This is due to Twitter API rate limits which caused our collector to sleep intermittently when it was being rate-limited.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
