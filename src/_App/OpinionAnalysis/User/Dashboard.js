import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import GaugeChart from 'react-gauge-chart'
import { meanBy } from 'lodash'
import Form from 'react-bootstrap/Form'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactGA from 'react-ga'

import Spinner from '../../Spinner'
import UserStatusesTable from './UserStatusesTable.js'
import { ReactComponent as UpArrow } from './arrow-upright.svg'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class Dashboard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {metric: "score_lr", parsedResponse: null}
        this.fetchData = this.fetchData.bind(this)
        this.handleModelSelect = this.handleModelSelect.bind(this)
    }

    handleModelSelect(changeEvent){
        var metric = changeEvent.target.value
        console.log("SELECT METRIC:", metric)
        ReactGA.event({
            category: "User Chart Interaction",
            action: "Select Opinion Model",
            value: metric
        })
        this.setState({"metric": metric})
    }

    render() {
        var screenName = this.props.screenName

        var spinIntoStuff = <Spinner/>
        if (this.state.parsedResponse) {
            var handle = `@${screenName.toUpperCase()}`
            var profileUrl = `https://twitter.com/${screenName}`
            var metric = this.state.metric

            var statuses = this.state.parsedResponse
            var scoredStatuses = statuses.filter(function(status){
                return status[metric] != null // need to remove these statuses, otherwise meanby will include in denominator and mess up the math
            })
            var meanOpinionScore = meanBy(scoredStatuses, (status) => status[metric])
            //console.log("STATUSES:", statuses.length, "SCORE:", meanOpinionScore)

            spinIntoStuff = <span>
                <Row>
                    <Col sm={12} md={12} lg={8}>
                        <h4>
                            {handle}
                            <a href={profileUrl}><UpArrow style={{font: "14px sans-serif", marginLeft: "4px"}}/></a>
                        </h4>

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
                                <Form.Check inline label="BERT Transformer" value="score_bert" type="radio" id="radio-bert"
                                    checked={metric === "score_bert"}
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

    componentDidUpdate(){
        console.log("DASHBOARD DID UPDATE")
    }

    fetchData(){
        var requestUrl = `${API_URL}/api/v1/user_tweets/${this.props.screenName}`
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
