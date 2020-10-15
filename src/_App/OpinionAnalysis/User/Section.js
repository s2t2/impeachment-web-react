
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import queryString from 'query-string'

import UserOpinionDashboard from "./Dashboard"

function handleClick(event){
    event.preventDefault() // prevent page reload
    console.log("YOU CLICKED ME!")
    console.log(event.target)

}

export default function UserOpinionSection() {

    let params = queryString.parse(window.location.search)
    var screenName = params["screen_name"] || "POLITICO"
    console.log("URL PARAMS:", params, screenName)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>User Opinions</h2></Card.Title>
                    <Card.Text>
                        After <a href="/opinion-models">training opinion models</a> to detect which bot community language any given tweet most closely resembles, we used the models to predict impeachment opinion scores for the remaining tweets in our dataset. A score of <code>0</code> means the tweet more closely resembles language used by Community 0 (left-leaning bots), while a score of <code>1</code> means the tweet more closely resembles language used by Community 1 (right-leaning bots).
                    </Card.Text>

                    <Card.Text>
                        We then calculated the mean impeachment opinion score for all users in our dataset.
                        {" "}The dashboard below shows how our models scored tweets by any given user.
                    </Card.Text>

                    <Form style={{marginBottom:10}}>
                        <Form.Row>
                            <Form.Label>Change User:</Form.Label>
                        </Form.Row>

                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Control className="mb-2" id="inputScreenName" placeholder="POLITICO"/>
                            </Col>

                            <Col xs="auto">
                                <Button type="submit" className="mb-2" variant="secondary" onClick={handleClick}>Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>

                    {/*

                    <Form inline style={{marginBottom:10}}>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Label htmlFor="inputScreenName">Change User:</Form.Label>
                            </Col>
                            <Col xs="auto">
                                <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
                                <Form.Control className="mb-2" id="inputScreenName" placeholder="POLITICO"/>
                            </Col>



                            <Col xs="auto">
                                <Button type="submit" className="mb-2" variant="secondary">Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>

                    */}

                </Card.Body>
            </Card>

                <Card>
                    <Card.Body>

                    <UserOpinionDashboard screen_name={screenName}/>

                </Card.Body>
            </Card>
        </Container>
    )
}
