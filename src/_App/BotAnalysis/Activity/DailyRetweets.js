

import React, { PureComponent } from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip, Legend} from 'recharts'
//import {groupBy, orderBy} from "lodash"
//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import {formatPct} from '../../Utils/Decorators'
import {bigNumberLabel} from "../../Utils/Decorators"
import {legendBlue, legendRed} from '../../Utils/Colors'
import Spinner from '../../Spinner'
import cachedData from './data'

const METRICS = {
    "bot_count": {"title": "Daily Active Bots", "yAxisTitle": "Bot Count"},
    "tweet_count": {"title": "Daily Bot Tweets", "yAxisTitle": "Tweet Count"},
    "retweet_count": {"title": "Daily Bot Retweets", "yAxisTitle": "Retweet Count"}
}
//const barData = [
//    {"date": '2020-01-01', "community_0": 40000, "community_1": 2400},
//    {"date": '2020-01-02', "community_0": 30000, "community_1": 1398},
//    {"date": '2020-01-03', "community_0": 20000, "community_1": 9800},
//    {"date": '2020-01-04', "community_0": 27800, "community_1": 3908},
//    {"date": '2020-01-05', "community_0": 18900, "community_1": 4800},
//    {"date": '2020-01-06', "community_0": 23900, "community_1": 3800},
//    {"date": '2020-01-07', "community_0": 34900, "community_1": 4300},
//]

export default class DailyRetweets extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {metric: "retweet_count", parsedResponse: null}
        this.selectMetric = this.selectMetric.bind(this)
    }

    render() {
        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var metric = this.state.metric

            var data = this.state.parsedResponse
            //console.log("DAILY BOT ACTIVITY", metric, data)

            data = data.map(function(daily){
                daily["Community 0"] = parseFloat(daily[`${metric}_0`])
                daily["Community 1"] = parseFloat(daily[`${metric}_1`])
                return daily
            })
            //console.log("DAILY BOT ACTIVITY", metric, data)

            const chartTitle = METRICS[metric]["title"]
            const yAxisLabel = METRICS[metric]["yAxisLabel"]

            spinIntoChart = <span>
                <Card.Text className="app-center" style={{marginBottom:0}}>
                    {chartTitle}
                </Card.Text>

                <div style={{width: "100%", height: 400}}>
                    <ResponsiveContainer>
                        <BarChart data={data} margin={{top: 5, right: 40, left: 5, bottom: 20}}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <Legend verticalAlign="top" align="center" iconType="circle" wrapperStyle={{top:-10, left:32}}/>

                            <YAxis tickFormatter={bigNumberLabel}>
                                <Label value={yAxisLabel} position="insideLeft" angle={-90} offset={0} style={{textAnchor: "middle"}}/>
                            </YAxis>
                            <XAxis type="category" dataKey="date" tick={{fontSize: 14}}>
                                <Label value="Date" position="insideBottom" offset={-15}/>
                            </XAxis>

                            <Bar dataKey="Community 1" stackId="a" fill={legendRed}  onClick={this.handleBarClick}/>
                            <Bar dataKey="Community 0" stackId="a" fill={legendBlue} onClick={this.handleBarClick}/>

                            <Tooltip
                                cursor={{fill: 'transparent', stroke:'#000'}}
                                labelFormatter={this.tooltipLabelFormatter}
                                formatter={this.tooltipFormatter}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <Form>
                    <Form.Group as={Row}>
                        <Col xs="6">
                            <Form.Label>Activity Metric:</Form.Label>

                            <Form.Control as="select" size="lg" custom defaultValue={metric} onChange={this.selectMetric}>
                                <option value="bot_count">Active Bots</option>
                                <option value="tweet_count">Bot Tweets</option>
                                <option value="retweet_count">Bot Retweets</option>
                            </Form.Control>
                        </Col>
                        <Col xs="6">
                        </Col>
                    </Form.Group>
                </Form>
            </span>
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
        }.bind(this), 1000) // let you see the spinner
    }

    selectMetric(changeEvent){
        var val = changeEvent.target.value
        console.log("SELECT METRIC:", val)
        //ReactGA.event({category: "Daily Bot Activity Chart", action: "Select Metric", label: val})
        this.setState({metric: val})
    }

    handleBarClick(bar){
        console.log("BAR CLICK", bar)
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
