
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import communityRetweetsOverTime from "./daily-rts-by-community.png"

export default function BotActivitySection() {

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Activity</h3></Card.Title>

                    <Card.Text>
                        After examining the <a href="/bot-beneficiaries">beneficiaries</a>
                        {" "} and <a href="/bot-language">language patterns</a>
                        {" "} of each <a href="/bot-communities">bot community</a>, we observe
                        {" "} Community 0 represents Left-leaning (Pro-Impeachment) bots, and
                        {" "} Community 1 represents Right-leaning (Pro-Trump) bots.
                    </Card.Text>

                    <h4>Retweet Volume</h4>
                    <Card.Text>
                        In general, left-leaning bots outnumber right-leaning bots 571 to 110, and generate a greater volume of tweets than right-leaning bots.
                    </Card.Text>
                    <img src={communityRetweetsOverTime} alt="a histogram depicting bot probabilities" style={{marginTop:20, marginBottom:20}} className="img-fluid"/>


                </Card.Body>
            </Card>

        </Container>
    )
}
