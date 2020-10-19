
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

import UserOpinionDashboard from "./Dashboard"

import TypeAheadSearchForm from './TypeAheadSearchForm';

//import List from './List.js'
import cachedData from './data.js'

export default class UserOpinionSection extends PureComponent {

    constructor(props) {
        super(props)
        let params = queryString.parse(window.location.search)
        var screenName = params["sn"] || "POLITICO" // append ?sn=BERNIESANDERS to the URL to customize via URL params!!!
        this.state = {screenName: screenName}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault() // prevent page reload
        var screenName = document.getElementById("inputScreenName").value
       
        console.log("YOU CLICKED ME!", screenName)
        this.setState({screenName: screenName})
    }

    render() {
        var screenName = this.state.screenName

        var myScreenName = this.props.selectedSuggestionCustom; 

        alert(myScreenName);

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
                                <TypeAheadSearchForm/>
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
