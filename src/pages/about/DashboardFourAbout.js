import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


import CustomLoader from "./CustomLoader"
import { orderBy } from 'lodash';

//dotenv.config()

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"





class DasbhoardFourAbout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { parsedResponse: null }
    this.fetchData = this.fetchData.bind(this)
  }

  render() {
    var spinIntoCharts;
    if (this.state.parsedResponse) {
      var tags = this.state.parsedResponse;

      var community0 = orderBy(tags.filter(function (t) { return t["community_id"] === 0 }), "count", "desc")
      var community1 = orderBy(tags.filter(function (t) { return t["community_id"] === 1 }), "count", "desc")

  

      spinIntoCharts = <Container fluid>
        <h3 className='m-5 app-center'>Top Hashtags in Bot Tweets
                </h3>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Body>
                <Card.Text className="app-center" >
                  Top Hashtags in Left-leaning Bot Tweets
                </Card.Text>
              </Card.Body>
              <div style={{ width: '100%', height: 800 }}>
                <ResponsiveContainer>
                  <BarChart
                    width={650}
                    height={700}
                    data={community0}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 150,
                      bottom: 5
                    }}>
                    <XAxis type="number" dataKey="count" />
                    <YAxis tick={{ fontSize: 14 }} type="category" dataKey="token" />
                    <CartesianGrid strokeDasharray="1 1" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#002868" />

                  </BarChart>
                </ResponsiveContainer>
              </div>

              
              
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Body>
                <Card.Text className="app-center">
                 
                    Top Hashtags in Right-leaning Bot Tweets
                                    
                </Card.Text>
              </Card.Body>
              <div style={{ width: '100%', height: 800 }}>
                <ResponsiveContainer>
                  <BarChart
                    width={650}
                    height={700}
                    data={community1}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 150,
                      bottom: 5
                    }}>
                    <XAxis type="number" dataKey="count" />
                    <YAxis tick={{ fontSize: 14 }} type="category" dataKey="token" />
                    <CartesianGrid strokeDasharray="1 1" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#bf0a30" />

                  </BarChart>
                </ResponsiveContainer>
              </div>
              
            </Card>
          </Col>
        </Row>
      </Container>
    } else {
      spinIntoCharts = <div class="d-flex align-items-center min-vh-90">
        <div class="container text-center">
          <CustomLoader />
        </div>
      </div>
    };

    return (
      <Container fluid className="no-padding">
        <Row>
          
          <Col md={12}>

            <Container fluid className="mt-70">
             


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
    var requestUrl = `${API_URL}/api/v0/top_status_tags?limit=20`
    console.log("REQUEST URL:", requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
        return response.json()
      })
      .then(function (json) {
        console.log("FETCHED", json.length, "ITEMS")
        this.setState({ parsedResponse: json })
      }.bind(this))
      .catch(function (err) {
        console.error("FETCH ERR", err)
      })
  }

};

export default DasbhoardFourAbout;
