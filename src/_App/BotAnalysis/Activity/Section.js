
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import DailyActivity from "../Impact/DailyActivity"

export default function BotDetectionSection() {

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Activity</h3></Card.Title>

                    <Card.Text>
                        Despite only representing less than 1% of users in our dataset,
                        {" "} the <a href="/bot-detection">bots</a> were responsible for
                        {" "} 31% of all tweets (20.9 million), and 36% of all retweets (20.1 million).

                    </Card.Text>
                    <DailyActivity metric="bot_tweets" metricsAvailable={["bots", "bot_tweets"]} />

                </Card.Body>
            </Card>
        </Container>
    )
}
