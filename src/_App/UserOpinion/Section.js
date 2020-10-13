
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'
import queryString from 'query-string'

import UserOpinionDashboard from "./Dashboard"

export default function UserOpinionSection() {

    let params = queryString.parse(window.location.search)
    var screenName = params["screen_name"] || "POLITICO"
    console.log("URL PARAMS:", params, screenName)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Impeachment Opinion Analysis (by User)</h2></Card.Title>
                    <Card.Text>
                        After <a href="/sentiment-analysis">training the binary classifier models</a> to detect which bot community language any given tweet most closely resembles, we used the models to predict impeachment opinion scores for the remaining tweets in our dataset. A score of <code>0</code> means the tweet more closely resembles language used by Community 0 (left-leaning bots), while a score of <code>1</code> means the tweet more closely resembles language used by Community 1 (right-leaning bots).
                    </Card.Text>

                    <Card.Text>
                        We then calculated the mean Impeachment Opinion Score for all users in our dataset. The chart below shows how our models scored tweets by any given user.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    {/* <input type="text"></input> */}
                    <UserOpinionDashboard screen_name={screenName}/>
                </Card.Body>
            </Card>
        </Container>
    )
}
