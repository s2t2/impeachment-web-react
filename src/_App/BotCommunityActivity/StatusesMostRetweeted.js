import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {orderBy} from 'lodash'

import Spinner from "../Spinner"

import StatusesMostRetweetedTable from "./StatusesMostRetweetedTable"

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

const BarLabel = function(props) {
    const {x, y, value} = props
    return (
        <text x={x} y={y} dx="1%" dy="4%" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="left">
            {value}
        </text>
    )
}

const StatusesBarChart = function(props){
    const {data, barFill} = props
    console.log("DATA", data, "FILL", barFill)

    var chartContainerStyle = { width: '100%', height: 500}
    var chartMargin = {top: 5,left: 10, bottom: 5}

    return (
        <div style={chartContainerStyle}>
            <ResponsiveContainer>

                <BarChart data={data} layout="vertical" margin={chartMargin}>
                    <XAxis type="number" dataKey="retweet_count"/>
                    <YAxis type="category" dataKey="status_text" width={525} tick={{fontSize: 14}}/>
                    <CartesianGrid strokeDasharray="1 1"/>
                    <Tooltip
                        labelFormatter={() => undefined}
                        formatter={(okay) => [new Intl.NumberFormat('en').format(okay), undefined]}
                    />
                    <Legend/>
                    <Bar dataKey="retweet_count" fill={barFill} label={<BarLabel/>}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default class StatusesMostRetweeted extends React.Component {
    constructor(props) {
        super(props)
        this.state = {metric: "retweet_count", parsedResponse: null}
        this.fetchData = this.fetchData.bind(this)
    }

    render() {
        var spinIntoCharts;
        if (!this.state.parsedResponse) {
            spinIntoCharts = <Spinner/>
        } else {
            var users = this.state.parsedResponse;
            var metric = this.state.metric

            var community0 = orderBy(users.filter(function (u) {return u["community_id"] === 0}), metric, "desc")
            var community1 = orderBy(users.filter(function (u) {return u["community_id"] === 1}), metric, "desc")

            var chartContainerStyle = { width: '100%', height: 500}
            var chartMargin = {top: 5,left: 10, bottom: 5}

            spinIntoCharts = <span>
                <h4 className='app-center'>Statuses Most Retweeted by Bot Community</h4>

                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Statuses Most Retweeted by Left-leaning Bots
                                </Card.Text>

                                {/* <StatusesBarChart data={community0} barFill="#002868"/> */}

                                <StatusesMostRetweetedTable data={community0}/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Statuses Most Retweeted by Right-leaning Bots
                                </Card.Text>

                                {/* <StatusesBarChart data={community1} barFill="#bf0a30"/> */}
                                <StatusesMostRetweetedTable data={community1}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </span>
        }

        return (
            <Container fluid>
                {spinIntoCharts}
            </Container>
        )
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        console.log("DASHBOARD DID UPDATE")
    }

    fetchData() {
        var requestUrl = `${API_URL}/api/v0/statuses_most_retweeted?limit=10&metric=${this.state.metric}`
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
