import React from 'react'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip //, Legend,
} from 'recharts'
//import {orderBy} from 'lodash'

import {formatNumber, decimalPrecision} from "../../Utils/Decorators"
import Spinner from "../../Spinner"
import cachedData from './bot_probabilities_histogram_20200201'

//var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class DailyBotProbabilities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: props["date"], parsedResponse: null}
    }

    render() {
        const chartTitle = `Distribution of Bot Probability Scores on ${this.state.date}`

        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
            var barFill = "#ccc"
            console.log("DATA", data, "FILL", barFill)

            spinIntoChart = (
                <span>
                    <Card.Text className="app-center">
                        {chartTitle}
                        <br/>
                        <small>Excludes the vast majority of users with default score of 0.5</small>
                    </Card.Text>

                    <div style={{width: "100%", height: 350}}>
                        <ResponsiveContainer>
                            <BarChart data={data} layout="horizontal" margin={{top: 0, right: 5, left: 5, bottom: 20}} barCategoryGap={1}>
                                <YAxis type="number" dataKey="frequency">
                                    <Label value="User Count" position="insideLeft" angle={-90} offset={0} style={{textAnchor: 'middle'}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="category"
                                    tick={{fontSize: 14}} // scale="band"
                                    >
                                    <Label value="Bot Probability (binned)" position="insideBottom" offset={-15}/>
                                </XAxis>
                                <CartesianGrid strokeDasharray="1 1"/>
                                <Tooltip
                                    //content={this.tooltipContent}
                                    cursor={{fill: 'transparent', stroke:'#000'}}
                                    //cursor={false}
                                    //position={{ y:-5 }}
                                    labelFormatter={this.tooltipLabelFormatter}
                                    formatter={this.tooltipFormatter}
                                />
                                {/*
                                <Legend/>
                                */}
                                <Bar dataKey="frequency" fill={barFill} onClick={this.handleBarClick}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </span>
            )
        }
        return (
            <span>
                <Card>
                    <Card.Body>
                        {spinIntoChart}
                    </Card.Body>
                </Card>
            </span>
        );
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        //this.fetchData()
        setTimeout(function(){
            this.setState({parsedResponse: cachedData})
        }.bind(this), 1000) // let you see the spinner
    }

    handleBarClick(bar){
        console.log("BAR CLICK", bar)
    }

    tooltipLabelFormatter(value){
        //console.log("LABEL FORMATTER", value)
        //return `${value} - ${decimalPrecision(value + 0.05, 2)}`
        return `Bot Probability (${value} to ${decimalPrecision(value + 0.05, 2)})`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        return [formatNumber(value), "Users"]
    }



}
