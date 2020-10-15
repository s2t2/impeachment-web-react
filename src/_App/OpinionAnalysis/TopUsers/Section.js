
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import TopUserOpinionsDashboard from "./Dashboard"

export default function TopUserOpinion() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Top User Opinions</h2></Card.Title>
                    <Card.Text>
                        After <a href="/user-opinions">calculating mean opinion scores</a> for all users, we are able to compare the user's scores relative to each other to see which are more pro-Impeachment vs which are more pro-Trump.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <TopUserOpinionsDashboard />
                </Card.Body>
            </Card>
        </Container>
    )
}
