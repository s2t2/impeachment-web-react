
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import exampleDailyBotProbabilities from "../../../_Dashboards/About/bot_probabilities_histogram_20200201.png" // TODO

export default function BotClassification() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Bot Classification</h2></Card.Title>

                    <Card.Text>
                        Previous research suggests it is possible to identify bots because they exhibit certain behaviors, specifically retweeting humans with high frequency.
                    </Card.Text>

                    <Card.Text>
                        So for each day in our collection period, we examined that day's retweets to identify which users retweeted with sufficient frequency to differentiate them from normal users. Our model assigned each user a "daily bot probability score" from <code>0</code> (not bot) to <code>1</code> (bot). An example distribution of daily bot scores is below.
                    </Card.Text>

                    <img src={exampleDailyBotProbabilities} alt="a histogram depicting bot probabilities" class="img-fluid"/>

                    <Card.Text>
                        After assigning daily bot scores to all users, we identified which users had at least one daily probability greater than 80%, and labeled these users as bots. In total, this method yielded 24,150 bots, which represents 0.67% of the total users and 0.87% of the total retweeters in our dataset.
                    </Card.Text>

                    <Card.Text>
                        Despite only representing less than 1% of all users, these bots were responsible for 20.9 million tweets (31% of the total tweets) and 20.1 million retweets (36% of the total tweets).
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
