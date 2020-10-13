import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {orderBy} from 'lodash'

import Spinner from "../Spinner"

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class DashboardThreeAbout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
        this.fetchData = this.fetchData.bind(this)
    }

    render() {
        var spinIntoCharts
        if (!this.state.parsedResponse) {
            spinIntoCharts = <Spinner/>
        } else {
            var tags = this.state.parsedResponse;

            var community0 = orderBy(tags.filter(function (t) {return t["community_id"] === 0}), "pct", "desc")
            var community1 = orderBy(tags.filter(function (t) {return t["community_id"] === 1}), "pct", "desc")

            spinIntoCharts = <Container fluid>
                <h4 className='app-center'>Top Hashtags in Bot Profiles</h4>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Top Hashtags in Left-leaning Bot Profiles
                                </Card.Text>

                                <div style={{ width: '100%', height: 800 }}>
                                    <ResponsiveContainer>
                                        <BarChart data={community0} layout="vertical" margin={{top: 5, right: 30, left: 150, bottom: 5}}>
                                            <XAxis type="number" dataKey="pct" />
                                            <YAxis tick={{ fontSize: 14 }} type="category" dataKey="token" />
                                            <CartesianGrid strokeDasharray="1 1" />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pct" fill="#002868" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Top Hashtags in Right-leaning Bot Profiles
                                </Card.Text>

                                <div style={{ width: '100%', height: 800 }}>
                                    <ResponsiveContainer>
                                        <BarChart data={community1} layout="vertical" margin={{top: 5, right: 30, left: 150, bottom: 5}}>
                                            <XAxis type="number" dataKey="pct" />
                                            <YAxis tick={{ fontSize: 14 }} type="category" dataKey="token" />
                                            <CartesianGrid strokeDasharray="1 1" />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pct" fill="#bf0a30" />
                                        </BarChart>
                                    </ResponsiveContainer>
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
