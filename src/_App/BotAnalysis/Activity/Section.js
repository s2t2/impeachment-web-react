
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
                        {" "} 20.9 million tweets (31% of all tweets), and 20.1 million retweets (36% of all retweets).

                    </Card.Text>


                    <DailyActivity metric="bot_tweets" selectable={["bots", "bot_tweets", "humans", "human_tweets"]} />

                    {/* <DailyActivity metric="bots" selectable={[]} /> */}

                    <Card.Text>
                        We observe pro-Trump bots tweet slightly more frequently than anti-Trump bots do.
                        {" "} And there are more pro-Trump bots active each day.
                    </Card.Text>

                    {/* <DailyActivity metric="bots" selectable={[]} /> */}

                </Card.Body>
            </Card>
        </Container>
    )
}
