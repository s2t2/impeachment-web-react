
import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
//import FormControl from 'react-bootstrap/FormControl'
//import InputGroup from 'react-bootstrap/InputGroup'
//import Button from 'react-bootstrap/Button'
import { Typeahead } from 'react-bootstrap-typeahead'
import queryString from 'query-string'
import ReactGA from 'react-ga'

//import {bigNumberLabel} from "../../Utils/Decorators"
import UserOpinionDashboard from "./Dashboard"
import users from "../TopUsers/data.js"


export default class UserOpinionSection extends PureComponent {

    constructor(props) {
        super(props)
        let params = queryString.parse(window.location.search)
        var screenName = props["screen_name"] || params["sn"] || params["screen_name"] || "SENATEMAJLDR" // append ?sn=BERNIESANDERS to the URL to customize via URL params!!!
        this.state = {screenName: screenName}
        //this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelection = this.handleSelection.bind(this)
    }

    //handleSubmit(event){
    //    event.preventDefault() // prevent page reload
    //    var screenName = document.getElementById("inputScreenName").value
    //    console.log("YOU CLICKED ME!", screenName)
    //    ReactGA.event({
    //        category: "User Chart Interaction",
    //        action: "Submit Screen Name",
    //        label: screenName
    //    })
    //    this.setState({screenName: screenName})
    //}

    handleSelection(selectedUsers){
        var selectedUser = selectedUsers[0]
        var screenName
        if(selectedUser){
            screenName = selectedUser["screen_name"]
            console.log("YOU SELECTED A SCREEN NAME!", screenName)
            ReactGA.event({
                category: "User Chart Interaction",
                action: "Select Screen Name",
                label: screenName
            })
        } else {
            screenName = "" // prevent backspace key from doing funky things
        }
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


                            {" "} The dashboard below shows Impeachment opinion scores for any given user.
                            {" "} NOTE: tweets by <i>FOXNEWS</i> contain only URLs, and are not scored.
                        </Card.Text>

                        {/*
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
                        */}

                        {/*
                        <Form.Group>
                            <Form.Label>Change User (listed by follower count):</Form.Label>
                            <Typeahead
                                id="top-users-typeahead"
                                onChange={this.handleSelection}
                                options={users}
                                placeholder="SENATEMAJLDR"
                                //selected={[this.state.screenName]}
                                labelKey="screen_name"
                                //labelKey={(option) => `${option.screen_name} (${bigNumberLabel(option.follower_count)} active followers)`}
                                //labelKey={(option) => `${option.screen_name} (${bigNumberLabel(option.follower_count)} active followers, ${option.status_count} tweets)`}
                            />
                        </Form.Group>


                        */}
                        <Form>
                            <Form.Row>
                                <Col xs="auto">
                                    <Form.Label>Change User (listed by follower count):</Form.Label>

                                    <Typeahead
                                        id="top-users-typeahead"
                                        onChange={this.handleSelection}
                                        options={users}
                                        placeholder="SENATEMAJLDR"
                                        //selected={[this.state.screenName]}
                                        labelKey="screen_name"
                                        //labelKey={(option) => `${option.screen_name} (${bigNumberLabel(option.follower_count)} active followers)`}
                                        //labelKey={(option) => `${option.screen_name} (${bigNumberLabel(option.follower_count)} active followers, ${option.status_count} tweets)`}
                                    />
                                </Col>



                            </Form.Row>
                        </Form>


                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        {/*
                        {screenName}
                        */}
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
