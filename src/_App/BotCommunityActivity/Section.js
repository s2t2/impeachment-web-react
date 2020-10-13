
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import StatusesMostRetweeted from   "../../_Dashboards/StatusesMostRetweeted/Dashboard" // "./StatusesMostRetweeted" // "../../_Dashboards/StatusesMostRetweeted/Dashboard"
import UsersMostRetweeted from "./UsersMostRetweeted" // "../../_Dashboards/UsersMostRetweeted/Dashboard"

export default function BotCommunityAnalysis() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Bot Community Activity Analysis</h2></Card.Title>

                    <Card.Text>
                        By examining the retweet beneficiaries of each bot community, we observe Community 0 represents left-leaning bots (pro-Impeachment), while Community 1 represents right-leaning bots (pro-Trump). We also observe that left-leaning bots retweet a greater variety of users, while right-leaning bots retweet Trump most by-far.
                    </Card.Text>

                    {/*  <UsersMostRetweeted/> */}

                    {/* <StatusesMostRetweeted metric="retweeter_count"/> */}
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <UsersMostRetweeted/>
                </Card.Body>
            </Card>
        </Container>
    )
}
