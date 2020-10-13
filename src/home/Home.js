import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Sidebar from '../layouts/Sidebar';
import WelcomeAlert from "../alerts/WelcomeAlert"

import React, {PureComponent} from 'react'
import Spinner from 'react-bootstrap/Spinner'

import cachedData from './data.js'
import BarChart from './VBarChart.js'
//import List from './List.js'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"
const CACHE_MODE = process.env.REACT_APP_CACHE_MODE || true // TODO: convert env var to bool

export default class Dashboard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            limit: 500,
            parsedResponse: null
        } // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
        this.fetchData = this
            .fetchData
            .bind(this)
    }

    render() {
        var spinIntoStuff
        if (this.state.parsedResponse) {
            var users = this.state.parsedResponse
            console.log("USERS MOST FOLLOWED:", users.length)

            spinIntoStuff = <span>
                <BarChart users={users}/> {/*<List users={users}/>*/}
            </span>
        } else {
            spinIntoStuff = <Spinner animation="grow"/>
        }

        return (
            <Container fluid className="no-padding">
                <Row>
                    <Col md={2}>

                        <Sidebar/>

                    </Col>
                    <Col md={10}>

                        <Container fluid className="mt-70">
                            <WelcomeAlert/>

                            <Card>

                                <Card.Body>
                                    <Card.Text className="app-center">

                                        Mean Opinion Scores for Users Tweeting about Trump Impeachment

                                    </Card.Text>

                                    {spinIntoStuff}
                                </Card.Body>

                            </Card>

                        </Container>

                    </Col>
                </Row>

            </Container>

        )
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        if (CACHE_MODE) {
            this.setState({parsedResponse: cachedData})
        } else {
            this.fetchData()
        }
    }

    fetchData() {
        var requestUrl = `${API_URL}/api/v1/users_most_followed?limit=${this.state.limit}`
        console.log("REQUEST URL:", requestUrl)
        fetch(requestUrl).then(function (response) {
            // console.log("RAW RESPONSE", "STATUS", response.status, response.statusText,
            // response.ok, "HEADERS", response.headers, response.url)
            return response.json()
        })
            .then(function (json) {
                console.log("FETCHED", json.length, "ITEMS")
                this.setState({parsedResponse: json})
            }.bind(this))
            .catch(function (err) {
                console.error("FETCH ERR", err)
            })
    }

}
