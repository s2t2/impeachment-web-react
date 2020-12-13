
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
                    {/*
                    <Card.Text>
                        By examining the retweet beneficiaries of each <a href="/bot-opinion-communities">bot opinion community</a>, we observe
                        {" "} Community 0 represents left-leaning (Pro-Impeachment) bots
                        {" "} and Community 1 represents right-leaning (Pro-Trump) bots.
                    </Card.Text>
                    */}

                    <Card.Text>
                        The charts below present the users and statuses retweeted most frequently by members of each <a href="/bot-opinions">bot opinion community</a>.
                    </Card.Text>

                    <h4>Users Most Retweeted</h4>
                    <UsersMostRetweeted/>

                    <h4>Statuses Most Retweeted</h4>
                    <StatusesMostRetweeted/>

                </Card.Body>
            </Card>
        </Container>
    )
}
