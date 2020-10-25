
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import UsersMostRetweeted from "./UsersMostRetweeted"
import StatusesMostRetweeted from "./StatusesMostRetweeted"

export default function BotBeneficiariesSection() {

    return (
        <Container fluid>
             <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Beneficiaries</h3></Card.Title>
                    <Card.Text>
                        By examining the beneficiaries of retweets by each <a href="/bot-communities">bot community</a>, we observe
                        {" "} Community 0 represents Left-leaning (Pro-Impeachment) bots
                        {" "} and Community 1 represents Right-leaning (Pro-Trump) bots.
                    </Card.Text>

                    <h4>Users Most Retweeted by Bot Community</h4>
                    <Card.Text>
                        We observe Left-leaning bots retweet a greater variety of users, while Right-leaning bots retweet Trump significantly more than any other user.
                    </Card.Text>
                    <UsersMostRetweeted/>

                    <h4>Statuses Most Retweeted by Bot Community</h4>
                    <StatusesMostRetweeted/>

                </Card.Body>
            </Card>
        </Container>
    )
}
