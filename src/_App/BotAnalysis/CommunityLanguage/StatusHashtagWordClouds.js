import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ReactWordcloud from 'react-wordcloud'
import {orderBy} from 'lodash'

import Spinner from "./../../Spinner"

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

const options0 = {
    colors: ["#26456e","#1c5998","#1c73b1","#3a87b7","#67add4","#7bc8e2"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "Source Sans Pro",
    fontSizes: [10, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 2,
    rotations: 2,
    rotationAngles: [0, 20],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
}

const options1 = {
    colors: ["#9c0824","#b10c1d","#c21417","#cf1719","#d8392c","#e35745"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "Source Sans Pro",
    fontSizes: [10, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 2,
    rotations: 2,
    rotationAngles: [0, 20],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
}

export default class WordClouds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {metric: "pct", parsedResponse: null}
        this.fetchData = this.fetchData.bind(this);
    }

    render() {
        var spinIntoCharts = <Spinner/>
        if (this.state.parsedResponse) {
            var tags = this.state.parsedResponse
            var metric = this.state.metric

            //var community0 = orderBy(tags.filter(function (u) {return u["community_id"] === 0}), metric, "asc")
            //var community1 = orderBy(users.filter(function (u) {return u["community_id"] === 1}), metric, "asc")
            //var words0 = community0.map(o => {return {text: o.token, value: o.count}})
            //var words1 = community1.map(o => {return {text: o.token, value: o.count}})

            var words0 = tags.filter(function (tag) {return tag["community_id"] === 0}).map(function(user){ return {text: user["token"], value: user[metric]}})
            var words1 = tags.filter(function (tag) {return tag["community_id"] === 1}).map(function(user){ return {text: user["token"], value: user[metric]}})

            spinIntoCharts = <Container fluid>
                {/* <h4 className='m-5 app-center'>Top Hashtags in Bot Tweets</h4> */}

                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                {/*
                                <Card.Text className="app-center">
                                    Top Hashtags in Left-leaning Bot Tweets
                                </Card.Text>
                                */}

                                <div style={{ width: "100%", height: "100%"}}>
                                    <ReactWordcloud options={options0} words={words0}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                {/*
                                <Card.Text className="app-center">
                                    Top Hashtags in Right-leaning Bot Tweets
                                </Card.Text>
                                */}

                                <div style={{ width: "100%", height: "100%"}}>
                                    <ReactWordcloud options={options1} words={words1}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        }

        return (
            <Container fluid>
                {spinIntoCharts}
            </Container>
        );
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        this.fetchData()
    }

    fetchData() {
        var requestUrl = `${API_URL}/api/v0/top_status_tags?limit=20`
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
