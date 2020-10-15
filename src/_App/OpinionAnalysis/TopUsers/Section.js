
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

import TopUserOpinionsDashboard from "./Dashboard"

export default function TopUserOpinion() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Top User Opinions</h2></Card.Title>
                    <Card.Text>
                        After <a href="/user-opinion">calculating mean opinion scores</a> for all users, we are able to compare the user's scores relative to each other to see which are more pro-Impeachment vs which are more pro-Trump.
                    </Card.Text>


                    <Card.Text>
                        Use the dashboard below to explore the mean impeachment opinion scores for the 1000 users in our dataset who have the most followers.
                        {" "}NOTE: bar size represents the number of followers, while color represents the opinion score.
                    </Card.Text>

                    <Dropdown style={{}}>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Show Me
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="showUsersMostFollowed">Users most followed</Dropdown.Item>
                        <Dropdown.Item eventKey="showUsersMostActive">Users most active</Dropdown.Item>
                        <Dropdown.Item eventKey="showUsersMostLeftLeaning">Users most left-leaning</Dropdown.Item>
                        <Dropdown.Item eventKey="showUsersMostRightLeaning">Users most right-leaning</Dropdown.Item>
                        <Dropdown.Item eventKey="showUsersMostNeutral">Users most neutral</Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="showMediaMostFollowed">Media most followed</Dropdown.Item>
                        <Dropdown.Item eventKey="showMediaMostActive">Media most active</Dropdown.Item>
                        <Dropdown.Item eventKey="showMediaMostLeftLeaning">Media most left-leaning</Dropdown.Item>
                        <Dropdown.Item eventKey="showMediaMostRightLeaning">Media most right-leaning</Dropdown.Item>
                        <Dropdown.Item eventKey="showMediaMostNeutral">Media most neutral</Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="showPolsMostFollowed">Politicians most followed</Dropdown.Item>
                        <Dropdown.Item eventKey="showPolsMostActive">Politicians most active</Dropdown.Item>
                        <Dropdown.Item eventKey="showPolsMostLeftLeaning">Politicians most left-leaning</Dropdown.Item>
                        <Dropdown.Item eventKey="showPolsMostRightLeaning">Politicians most right-leaning</Dropdown.Item>
                        <Dropdown.Item eventKey="showPolsMostNeutral">Politicians most neutral</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

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
