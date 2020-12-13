import React, { PureComponent } from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip, Legend} from 'recharts'
//import {groupBy, orderBy} from "lodash"
//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import {bigNumberLabel} from '../../Utils/Decorators'
import {legendBlue, legendRed} from '../../Utils/Colors'
import Spinner from '../../Spinner'
import cachedData from '../../../data/daily_activity.js' //'./data'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

const METRICS = {
    "humans": {
        "chartTitle": "Active Humans by Opinion Community",
        "yAxisTitle": "Human Count",
        "formSelect": "Active Humans",
    },
    "bots": {
        "chartTitle": "Active Bots by Opinion Community",
        "yAxisTitle": "Bot Count",
        "formSelect": "Active Bots",
    },
    "human_tweets": {
        "chartTitle": "Human Tweets by Opinion Community",
        "yAxisTitle": "Human Tweet Count",
        "formSelect": "Human Tweets",
    },
    "bot_tweets": {
        "chartTitle": "Bot Tweets by Opinion Community",
        "yAxisTitle": "Bot Tweet Count",
        "formSelect": "Bot Tweets",
    },
}
const DEFAULT_METRIC = "bots"

export default class DailyActivity extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            metric: props["metric"] || DEFAULT_METRIC,
            selectableMetrics: props["selectable"] || Object.keys(METRICS), // [], // Object.keys(METRICS) // ["humans", "bots", "human_tweets", "bot_tweets"]
            parsedResponse: null
        }
        this.selectMetric = this.selectMetric.bind(this)
    }

    render() {
        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var metric = this.state.metric
            var data = this.state.parsedResponse
            //console.log("DAILY OPINION SHIFT DATA", data)

            data = data.map(function(daily){
                daily["Anti-Trump"] = daily[`${metric}_0`]
                daily["Pro-Trump"] = daily[`${metric}_1`]
                return daily
            })

            //console.log("DAILY OPINION SHIFT DATA 2", data)

            const chartTitle = METRICS[metric]["chartTitle"]
            const yAxisTitle = METRICS[metric]["yAxisTitle"]

            spinIntoChart = (
                <span>
                    <Card.Text className="app-center">
                        {chartTitle}

                        {/*
                        <br/>
                        <small>{chartSubtitle}</small>

                        */}
                    </Card.Text>

                    {/*
                    */}

                    <div style={{width: "100%", height: 500}}>
                        <ResponsiveContainer>
                            <BarChart data={data} margin={{top: 5, right: 40, left: 5, bottom: 20}}>
                                <CartesianGrid strokeDasharray="3 3" />

                                <Legend verticalAlign="top" align="center" iconType="circle" wrapperStyle={{top:-10, left:32}}/>

                                <YAxis tickFormatter={bigNumberLabel}>
                                    <Label value={yAxisTitle} position="insideLeft" angle={-90} offset={0} style={{textAnchor: "middle"}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="date" tick={{fontSize: 14}}>
                                    <Label value="Date" position="insideBottom" offset={-15}/>
                                </XAxis>

                                <Bar dataKey="Anti-Trump" stackId="a" fill={legendBlue} onClick={this.handleBarClick}/>
                                <Bar dataKey="Pro-Trump" stackId="b" fill={legendRed}  onClick={this.handleBarClick}/>

                                <Tooltip
                                    cursor={{fill: 'transparent', stroke:'#000'}}
                                    labelFormatter={this.tooltipLabelFormatter}
                                    formatter={this.tooltipFormatter}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    { this.state.selectableMetrics.length > 0 &&

                        <Form>
                            <Form.Group as={Row}>
                                <Col xs="6">
                                    <Form.Label>Metric:</Form.Label>

                                    <Form.Control as="select" size="lg" custom defaultValue={metric} onChange={this.selectMetric}>
                                    {
                                        this.state.selectableMetrics.map(function(metricName){
                                            return <option value={metricName}>{METRICS[metricName]["formSelect"]}</option>
                                        })
                                    }
                                    </Form.Control>
                                </Col>
                                <Col xs="6">
                                </Col>
                            </Form.Group>
                        </Form>

                    }
                </span>
            )
        }

        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                    {spinIntoChart}
                </Card.Body>
            </Card>
        )
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        //this.fetchData()
        setTimeout(function(){
            this.setState({parsedResponse: cachedData})
        }.bind(this), 800) // let you see the spinner
    }

    selectMetric(changeEvent){
        var val = changeEvent.target.value
        console.log("SELECT METRIC:", val)
        //ReactGA.event({category: "Daily Activity Chart", action: "Select Metric", label: val})
        this.setState({metric: val})
    }

    tooltipLabelFormatter(value){
        return `Date : ${value}`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        //return [numberLabel(value), name]
        //return [value, name]
        return [bigNumberLabel(value), name]
    }


}
