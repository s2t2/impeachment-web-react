import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'

import Spinner from "./../../Spinner"
import HashtagWordClouds from './HashtagWordClouds'

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

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
            spinIntoCharts = <HashtagWordClouds tags={tags}/>
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
        var requestUrl = `${API_URL}/api/v0/top_profile_tags?limit=20`
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
