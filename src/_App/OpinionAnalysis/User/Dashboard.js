import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import GaugeChart from 'react-gauge-chart'
import { meanBy } from 'lodash'
import Form from 'react-bootstrap/Form'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'
import UserStatusesTable from './UserStatusesTable.js'
import { ReactComponent as UpArrow } from './arrow-upright.svg'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class Dashboard extends PureComponent {
    constructor(props) {
        super(props)
        //this.state = {screen_name: "politico", metric: "score_lr", parsedResponse: null} // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
        this.state = {metric: "score_lr", parsedResponse: null} // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
        this.fetchData = this.fetchData.bind(this)
        this.handleModelSelect = this.handleModelSelect.bind(this)
    }

    handleModelSelect(changeEvent){
        var metric = changeEvent.target.value
        console.log("SELECT METRIC:", metric)
        this.setState({"metric": metric})
    }

    render() {
        var spinIntoStuff = <Spinner/>
        if (this.state.parsedResponse) {
            var handle = `@${this.props.screen_name.toUpperCase()}`
            var profileUrl = `https://twitter.com/${this.props.screen_name}`
            var metric = this.state.metric

            var statuses = this.state.parsedResponse
            var meanOpinionScore = meanBy(statuses, (status) => status[metric])
            //console.log("STATUSES:", statuses.length, "SCORE:", meanOpinionScore)

            spinIntoStuff = <span>
                <Row>
                    <Col sm={12} md={12} lg={8}>
                        <h3>{handle} <a href={profileUrl}><UpArrow style={{font: "14px sans-serif", marginLeft: "4px"}}/></a></h3>

                        <p className="lead">Mean Opinion Score: <code>{meanOpinionScore.toFixed(2)}</code></p>
                    </Col>


                    <Col sm={12} md={12} lg={4}>
                        <Form style={{paddingTop:8}}>
                            <Form.Label>Opinion Model:</Form.Label>

                            <div key="inline-radios" className="mb-3">
                                <Form.Check inline label="Logistic Regression" value="score_lr" type="radio" id="radio-lr"
                                    checked={metric === "score_lr"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline label="Naive Bayes" value="score_nb" type="radio" id="radio-nb"
                                    checked={metric === "score_nb"}
                                    onChange={this.handleModelSelect}
                                />
                            </div>
                        </Form>
                    </Col>
                </Row>

                <GaugeChart id="necessary" style={{width: "400px", height:"180px", margin: "10px auto"}}
                    arcsLength={[0.3, 0.4, 0.3]}
                    colors={["steelblue", "#ccc", "#D62021"]}
                    percent={meanOpinionScore}
                    arcPadding={0.03}
                    cornerRadius={0}
                    hideText={true}
                />

                <UserStatusesTable data={statuses}/>
            </span>
        }

        return (
        <Container className="Dashboard">
            {spinIntoStuff}
        </Container>
        )
    }

    componentDidMount(){
        console.log("DASHBOARD DID MOUNT")
        this.fetchData()
    }

    fetchData(){
        var requestUrl = `${API_URL}/api/v1/user_tweets/${this.props.screen_name}`
        console.log("REQUEST URL:", requestUrl)
        fetch(requestUrl)
        .then(function(response) {
            //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
            return response.json()
        })
        .then(function(json){
            console.log("FETCHED", json.length, "ITEMS")
            this.setState({parsedResponse: json})
        }.bind(this))
        .catch(function(err){
            console.error("FETCH ERR", err)
        })
    }

}
