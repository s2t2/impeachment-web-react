
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import UsersMostRetweeted from "./UsersMostRetweeted"
import StatusesMostRetweeted from "./StatusesMostRetweeted"
import communityRetweetsOverTime from "./daily-rts-by-community.png"

export default function BotActivitySection() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Activity</h3></Card.Title>
                    <Card.Text>
                        By examining the retweet activity of each <a href="/bot-communities">bot community</a>, we observe Community 0 represents left-leaning bots (pro-Impeachment), while Community 1 represents right-leaning bots (pro-Trump).
                    </Card.Text>

                    <h4>Users Most Retweeted by Bot Community</h4>
                    <Card.Text>
                        We also observe left-leaning bots retweet a greater variety of users, while right-leaning bots retweet Trump significantly more than any other user.
                    </Card.Text>
                    <UsersMostRetweeted/>

                    <h4>Retweet Volume</h4>
                    <Card.Text>
                        In general, left-leaning bots outnumber right-leaning bots 571 to 110, and generate a greater volume of tweets than right-leaning bots.
                    </Card.Text>
                    <img src={communityRetweetsOverTime} alt="a histogram depicting bot probabilities" style={{marginTop:20, marginBottom:20}} class="img-fluid"/>


                    <h4>Statuses Most Retweeted by Bot Community</h4>
                    <StatusesMostRetweeted/>

                </Card.Body>
            </Card>
        </Container>
    )
}
