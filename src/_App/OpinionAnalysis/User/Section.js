
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
import { Typeahead } from 'react-bootstrap-typeahead'
import queryString from 'query-string'
import ReactGA from 'react-ga'

import UserOpinionDashboard from "./Dashboard"

import users from "../TopUsers/data.js"

//const exampleOptions = [
//  { name: 'Alabama', population: 4780127, capital: 'Montgomery', region: 'South' },
//  { name: 'Alaska', population: 710249, capital: 'Juneau', region: 'West' },
//  { name: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West' },
//]

class MyTypeAhead extends PureComponent {

    constructor(props) {
        super(props)
        var screenName = props["screen_name"]  || "Texas" //|| "SENATEMAJLDR"
        this.state = {screenName: screenName}
        this.handleSelection = this.handleSelection.bind(this)
    }

    handleSelection(selectedUsers){
        //event.preventDefault() // prevent page reload
        //var screenName = document.getElementById("inputScreenName").value

        var screenName
        var selectedUser = selectedUsers[0]
        if(selectedUser){
            screenName = selectedUser["screen_name"]
            console.log("YOU SELECTED A SCREEN NAME!", screenName)
            //ReactGA.event({
            //    category: "User Chart Interaction",
            //    action: "Input Screen Name",
            //    value: screenName
            //})
        } else {
            screenName = "" // prevent backspace key from doing funky things
        }

        this.setState({screenName: screenName})
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>Change User:</Form.Label>
                <Typeahead
                    id="top-users-typeahead"
                    labelKey="screen_name"
                    onChange={this.handleSelection}
                    options={users}
                    placeholder="SENATEMAJLDR"
                    //selected={[this.state.screenName]}
                />
            </Form.Group>
        )
    }
}

















export default class UserOpinionSection extends PureComponent {

    constructor(props) {
        super(props)
        let params = queryString.parse(window.location.search)
        var screenName = props["screen_name"] || params["sn"] || "SENATEMAJLDR" // append ?sn=BERNIESANDERS to the URL to customize via URL params!!!
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
                        <Card.Title><h3>User Opinions</h3></Card.Title>
                        <Card.Text>
                            After training our <a href="/opinion-models">Impeachment opinion models</a>
                            {" "} on the language patterns of the anti-Trump and pro-Trump bot retweet communities,
                            {" "} we used the models to predict Impeachment opinion scores for the remaining tweets in our dataset.
                            {" "}We then calculated the mean Impeachment opinion score for all users in our dataset.
                        </Card.Text>

                        <Card.Text>
                            The dashboard below shows how our models scored the tweets of any given user (e.g. <i>REALDONALDTRUMP</i>, <i>SPEAKERPELOSI</i>, <i>SENATEMAJLDR</i>, <i>NYTIMES</i>, <i>WSJ</i>, etc.).
                            {" "} NOTE: tweets by <i>FOXNEWS</i> contain only URLs, and are not scored.
                        </Card.Text>

                        <Form style={{marginBottom:10}}>
                            <Form.Row>
                                <Form.Label>Change User:</Form.Label>
                            </Form.Row>

                            <Form.Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Control id="inputScreenName" name="screenName" defaultValue={screenName} placeholder="SENATEMAJLDR" className="mb-2" />
                                </Col>

                                <Col xs="auto">
                                    <Button type="submit" className="mb-2" variant="secondary" onClick={this.handleSubmit}>Submit</Button>
                                </Col>


                            </Form.Row>
                        </Form>

                        <MyTypeAhead/>


                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        {/*
                        <UserOpinionDashboard key={screenName} screenName={screenName}/>
                        */}

                        {screenName}
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
