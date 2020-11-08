import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import GaugeChart from 'react-gauge-chart'
import { meanBy } from 'lodash'
import Form from 'react-bootstrap/Form'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactGA from 'react-ga'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import {QuestionIcon} from '@primer/octicons-react'

import Spinner from '../../Spinner'
import UserStatusesTable from './UserStatusesTable.js'
import { ReactComponent as UpArrow } from './arrow-upright.svg'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

function formatPct(num) {
    // formats 0.3444444 as "34.4%"
    return (num * 100.0).toFixed(1) + "%"
} // refactor me into shared utils file

const helperMessage = "The user's average Pro-Trump opinion score, as calculated by the selected opinion model. 0% means anti-Trump, while 100% means pro-Trump."

//const opinionScoreTooltip = <Tooltip id="opinion-score-tooltip">
//    {helperMessage}
//</Tooltip>

const modelSelectTooltip = <Tooltip id="model-select-tooltip">
    See opinion scores from different Impeachment opinion models.
</Tooltip>

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
                    <Col sm={12} md={12} lg={5}>
                        <h4>
                            {handle}
                            <a href={profileUrl}><UpArrow style={{font: "14px sans-serif", marginLeft: "4px"}}/></a>
                        </h4>

                        <p className="lead" style={{marginBottom:0}}>Mean Opinion Score: <code>{formatPct(meanOpinionScore)}</code>
                            {/*
                            {" "}
                            <OverlayTrigger placement="top" overlay={opinionScoreTooltip}>
                                <span><QuestionIcon verticalAlign="text-top"/></span>
                            </OverlayTrigger>
                            */}
                        </p>
                       {/*
                        <small>The user's average Pro-Trump opinion score, as calculated by the selected opinion model.</small>
                        <br/>
                        <small>0% means Pro-Impeachment (blue), while 100% means Pro-Trump (red).</small>
                       */}
                       <small>{helperMessage}</small>
                    </Col>

                    <Col sm={12} md={12} lg={3}>
                    </Col>

                    <Col sm={12} md={12} lg={4}>
                        <Form style={{paddingTop:8}}>
                            <Form.Label>
                                Opinion Model:
                                {" "}
                                <OverlayTrigger placement="top" overlay={modelSelectTooltip}>
                                    <span><QuestionIcon verticalAlign="text-top"/></span>
                                </OverlayTrigger>
                            </Form.Label>

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
