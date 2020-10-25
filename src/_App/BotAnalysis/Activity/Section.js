
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

//import communityRetweetsOverTime from "./daily-rts-by-community.png"
import DailyRetweets from './DailyRetweets'

export default function BotActivitySection() {

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Activity</h3></Card.Title>

                    <h4>Retweet Volume</h4>
                    <Card.Text>
                        Left-leaning bots generate a greater volume of retweets than Right-leaning bots.
                        {" "} This is perhaps because Left-leaning bots <a href="/bot-communities">outnumber</a> Right-leaning bots five to one.
                    </Card.Text>
                    {/*
                    <img src={communityRetweetsOverTime} alt="a histogram depicting bot probabilities" style={{marginTop:20, marginBottom:20}} className="img-fluid"/>
                    */}
                    <DailyRetweets/>

                    <Card.Text>
                        NOTE: only after examining the <a href="/bot-beneficiaries">beneficiaries</a>
                        {" "} and <a href="/bot-language">language patterns</a>
                        {" "} of each <a href="/bot-communities">bot community</a>, do we observe
                        {" "} Community 0 represents Left-leaning (Pro-Impeachment) bots, and
                        {" "} Community 1 represents Right-leaning (Pro-Trump) bots.
                    </Card.Text>

                </Card.Body>
            </Card>

        </Container>
    )
}
