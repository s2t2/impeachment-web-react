
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import UsersMostRetweeted from "./UsersMostRetweeted" // "../../_Dashboards/UsersMostRetweeted/Dashboard"
import StatusesMostRetweeted from "./StatusesMostRetweeted" // "../../_Dashboards/StatusesMostRetweeted/Dashboard"

export default function BotCommunityAnalysis() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Community Activity</h3></Card.Title>

                    <Card.Text>
                        By examining the retweet beneficiaries of each bot community, we observe Community 0 represents left-leaning bots (pro-Impeachment), while Community 1 represents right-leaning bots (pro-Trump). We also observe that left-leaning bots retweet a greater variety of users, while right-leaning bots retweet Trump most by-far.
                    </Card.Text>

                    <UsersMostRetweeted/>

                    <StatusesMostRetweeted/>
                </Card.Body>
            </Card>
        </Container>
    )
}
