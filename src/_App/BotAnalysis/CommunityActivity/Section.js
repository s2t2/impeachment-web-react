
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import UsersMostRetweeted from "./UsersMostRetweeted"
import StatusesMostRetweeted from "./StatusesMostRetweeted"
import communityRetweetsOverTime from "./daily-rts-by-community.png"

export default function BotCommunityAnalysis() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Community Activity</h3></Card.Title>

                    <Card.Text>
                        By examining the retweet beneficiaries of each bot community, we observe Community 0 represents left-leaning bots (pro-Impeachment), while Community 1 represents right-leaning bots (pro-Trump).
                        {" "} We also observe that left-leaning bots retweet a greater variety of users, while right-leaning bots retweet Trump significantly more than any other user.
                    </Card.Text>

                    <UsersMostRetweeted/>

                    <StatusesMostRetweeted/>

                    <Card.Text>
                        Left-leaning bots outnumber right-leaning bots 571 to 110, and generate a greater volume of tweets than right-leaning bots.
                    </Card.Text>

                    <img src={communityRetweetsOverTime} alt="a histogram depicting bot probabilities" style={{marginTop:20, marginBottom:20}} class="img-fluid"/>

                </Card.Body>
            </Card>
        </Container>
    )
}
