
import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
//import FormControl from 'react-bootstrap/FormControl'
//import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import queryString from 'query-string'
import ReactGA from 'react-ga'

import UserOpinionDashboard from "./Dashboard"

export default class UserOpinionSection extends PureComponent {

    constructor(props) {
        super(props)
        let params = queryString.parse(window.location.search)
        var screenName = props["screen_name"] || params["sn"] || "POLITICO" // append ?sn=BERNIESANDERS to the URL to customize via URL params!!!
        this.state = {screenName: screenName}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault() // prevent page reload
        var screenName = document.getElementById("inputScreenName").value
        console.log("YOU CLICKED ME!", screenName)
        ReactGA.event({
            category: "User Chart Interaction",
            action: "Input Screen Name",
            value: screenName
        })
        this.setState({screenName: screenName})
    }

    render() {
        var screenName = this.state.screenName

        return (
            <Container fluid>
                <Card>
                    <Card.Body>
                        <Card.Title><h2>User Opinions</h2></Card.Title>
                        <Card.Text>
                            After <a href="/opinion-models">training opinion models</a> to detect which <a href="/bot-language">bot community language</a>
                            {" "} any given tweet most closely resembles, we used the models to predict Impeachment opinion scores for the remaining tweets in our dataset.
                            {" "} A score of <code>0</code> means the tweet more closely resembles language used by Community 0 (left-leaning Pro-Impeachment bots), while a score of <code>1</code> means the tweet more closely resembles language used by Community 1 (right-leaning Pro-Trump bots).
                        </Card.Text>

                        <Card.Text>
                            We then calculated the mean Impeachment opinion score for all users in our dataset.
                            {" "}The dashboard below shows how our models scored tweets by any given user.
                            {" "} HINT: try <i>REALDONALDTRUMP</i>, <i>SPEAKERPELOSI</i>, <i>SENATEMAJLDR</i>, <i>NYTIMES</i>, <i>WSJ</i>, or <i>POLITICO</i> to get started.
                            {" "} NOTE: tweets by <i>FOXNEWS</i> contain only URLs and are not scored.
                        </Card.Text>

                        <Form style={{marginBottom:10}}>
                            <Form.Row>
                                <Form.Label>Change User:</Form.Label>
                            </Form.Row>

                            <Form.Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Control id="inputScreenName" name="screenName" defaultValue={screenName} placeholder="POLITICO" className="mb-2" />
                                </Col>

                                <Col xs="auto">
                                    <Button type="submit" className="mb-2" variant="secondary" onClick={this.handleSubmit}>Submit</Button>
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
                        <UserOpinionDashboard key={screenName} screenName={screenName}/>
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    //componentDidMount(){
    //    console.log("SECTION DID MOUNT")
    //}

    //componentDidUpdate(){
    //    console.log("SECTION DID UPDATE")
    //}
}
