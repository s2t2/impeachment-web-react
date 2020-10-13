
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import exampleDailyBotProbabilities from "../../_Dashboards/About/bot_probabilities_histogram_20200201.png"

export default function TweetCollectionSection() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Bot Classification</h2></Card.Title>
                    <Card.Text>
                       <p>
                            The previous research provides a method for identifying which Twitter users are bots, based on their retweet behavior. It suggests bots exhibit the behavior of retweeting humans at significant quantities.
                        </p>
                        <p>
                            So for each day in our collection period, we examined that day's retweets to identify which users retweeted with sufficient frequency to differentiate them from normal users, and our model assigned each user a daily bot probability score from 0 (not bot) to 1 (bot). An example daily distribution of bot scores is below. Most scores are around 0.5.
                        </p>
                        <img src={exampleDailyBotProbabilities} alt="a histogram depicting bot probabilities" class="img-fluid"/>
                        <p>
                            After assigning daily bot scores to all users, we identified which users had at least one daily probability greater than 80%, and labeled these users as bots. In total, this method yielded 24,150 bots, which represents 0.67% of the total users and 0.87% of the total retweeters in our dataset.
                        </p>
                        <p>
                        It is interesting to observe that despite only representing less than 1% of all users, these bots were responsible for 20.9 million tweets (31% of the total tweets) and 20.1 million retweets (36% of the total tweets).
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
