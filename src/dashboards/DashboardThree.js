import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Sidebar from '../layouts/Sidebar';
import WelcomeAlert from "../alerts/WelcomeAlert"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

import Spinner from 'react-bootstrap/Spinner';
import {orderBy} from 'lodash';

//dotenv.config()

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"


class DasbhoardThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parsedResponse: null
        }
        this.fetchData = this
            .fetchData
            .bind(this)
    }

    render() {
        var spinIntoCharts;
        if (this.state.parsedResponse) {
            var tags = this.state.parsedResponse;

            var community0 = orderBy(tags.filter(function (t) {
                return t["community_id"] === 0
            }), "pct", "desc")
            console.log("community0", community0);
            var community1 = orderBy(tags.filter(function (t) {
                return t["community_id"] === 1
            }), "pct", "desc")
            console.log("community1", community1);

            spinIntoCharts = <Container fluid>
                <h3 className='m-5 app-center'>Top Hashtags in Bot Bot Profiles
                </h3>
                <Row>
                    <Col>
                        <Card>
                            <BarChart
                                width={650}
                                height={700}
                                data={community0}
                                layout="vertical"
                                margin={{
                                top: 5,
                                right: 30,
                                left: 100,
                                bottom: 5
                            }}>
                                <XAxis type="number" dataKey="pct"/>
                                <YAxis type="category" dataKey="token"/>
                                <CartesianGrid strokeDasharray="1 1"/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="pct" fill="#3C3B6E"/>

                            </BarChart>
                            <Card.Body>
                                <Card.Text className="app-center">
                                    
                                       Top Hashtags in Left-leaning Bot Profiles
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <BarChart
                                width={650}
                                height={700}
                                data={community1}
                                layout="vertical"
                                margin={{
                                top: 5,
                                right: 30,
                                left: 100,
                                bottom: 5
                            }}>
                                <XAxis type="number" dataKey="pct"/>
                                <YAxis type="category" dataKey="token"/>
                                <CartesianGrid strokeDasharray="1 1"/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="pct" fill="#B22234"/>

                            </BarChart>

                            <Card.Body>
                                <Card.Text className="app-center">
                                  
                                        Top Hashtags in Right-leaning Bot Profile
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        } else {
            spinIntoCharts = <Container fluid className="mt-70 app-center">
                <Spinner className="my-auto" animation="grow" />
            </Container>
        };

        return (
            <Container fluid className="no-padding">
                <Row>
                    <Col sm={2}>

                        <Sidebar/>

                    </Col>
                    <Col sm={10}>

                        <Container fluid className="mt-70">
                            <WelcomeAlert/>
                

                            {spinIntoCharts}

                        </Container>

                    </Col>
                </Row>

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

};

export default DasbhoardThree;
