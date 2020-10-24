import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {orderBy} from 'lodash'

import Spinner from "../../Spinner"
import {legendBlue, legendRed} from "../../Utils/Colors"

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

const HashtagsBarChart = function(props){
    const {data, barFill} = props
    console.log("DATA", data, "FILL", barFill)

    var chartContainerStyle = { width: "100%", height: 650}
    var chartMargins = {top: 5, right: 30, left: 150, bottom: 5}

    return (
        <div style={chartContainerStyle}>
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical" margin={chartMargins}>
                    <XAxis type="number" dataKey="pct" />
                    <YAxis type="category" dataKey="token" tick={{ fontSize: 14 }} />
                    <CartesianGrid strokeDasharray="1 1"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="pct" fill={barFill}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default class StatusHashtags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
        this.fetchData = this.fetchData.bind(this)
    }

    render() {
        var spinIntoCharts = <Spinner/>
        if (this.state.parsedResponse) {
            var tags = this.state.parsedResponse;

            var community0 = orderBy(tags.filter(function (t) {return t["community_id"] === 0}), "pct", "desc") // TODO consider mapping the pct values .toFixed(4)
            var community1 = orderBy(tags.filter(function (t) {return t["community_id"] === 1}), "pct", "desc") // TODO consider mapping the pct values .toFixed(4)

            spinIntoCharts = <Container fluid>
                <h4 className='app-center'>Top Hashtags in Bot Tweets</h4>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Top Hashtags in Left-leaning Bot Tweets
                                </Card.Text>

                                 <HashtagsBarChart data={community0} barFill={legendBlue} />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    Top Hashtags in Right-leaning Bot Tweets
                                </Card.Text>

                                <HashtagsBarChart data={community1} barFill={legendRed} />
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
