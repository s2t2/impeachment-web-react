import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip} from 'recharts'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import BootstrapTooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {QuestionIcon} from '@primer/octicons-react'

import {formatNumber, decimalPrecision} from "../../Utils/Decorators"
import Spinner from "../../Spinner"
import cachedData from '../TopUsers/data' // './meanOpinionScoresData'

const MODEL_LABELS = {
    "avg_score_lr": "Logistic Regression",
    "avg_score_nb": "Naive Bayes",
    "avg_score_bert": "BERT Transformer",
}

const modelSelectTooltip = <BootstrapTooltip className="model-select-tooltip-mean-opinion-scores">
    See opinion scores from different Impeachment opinion models.
</BootstrapTooltip>

export default class DailyBotProbabilities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            metric: props["metric"] || "avg_score_lr",
            parsedResponse: null}
        this.handleModelSelect = this.handleModelSelect.bind(this)
    }

    render() {
        const metric = this.state.metric
        const chartTitle = `Distribution of Mean Pro-Trump Opinion Scores (for Users Most Followed)`
        const chartSubtitle = `Opinion Model: ${MODEL_LABELS[metric]}`

        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
            var barFill = "#ccc" // TODO: bar-specific
            console.log("DATA", data, "FILL", barFill)

            // GOAL:
            // const bars = [
            //     {"category": 0.0, "frequency": 634},
            //     {"category": 0.05, "frequency": 42}
            // ]

            debugger;


            spinIntoChart = (
                <span>
                    <Card.Text className="app-center">
                        {chartTitle}
                        <br/>
                        <small>{chartSubtitle}</small>
                    </Card.Text>

                    <div style={{width: "100%", height: 350}}>
                        <ResponsiveContainer>
                            <BarChart data={data} layout="horizontal" margin={{top: 0, right: 25, left: 5, bottom: 20}} barCategoryGap={1}>
                                <YAxis type="number" dataKey="frequency">
                                    <Label value="Percentage of Top Users" position="insideLeft" angle={-90} offset={0} style={{textAnchor: 'middle'}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="category"
                                    tick={{fontSize: 14}} // scale="band"
                                    >
                                    <Label value="Mean Pro-Trump Opinion Score (binned)" position="insideBottom" offset={-15}/>
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
                                <Bar dataKey="frequency" fill={barFill} onClick={this.handleBarClick}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </span>
            )
        }
        return (
            <span>
                <Card style={{marginBottom:0}}>
                    <Card.Body>
                        {spinIntoChart}

                        <Form style={{paddingTop:20}}>
                            <Form.Label>
                                Opinion Model:
                                {/*
                                */}
                                <OverlayTrigger placement="top" overlay={modelSelectTooltip}>
                                    <span><QuestionIcon verticalAlign="text-top"/></span>
                                </OverlayTrigger>
                            </Form.Label>

                            <div key="inline-radios" className="mb-3">
                                <Form.Check inline label="Logistic Regression" value="avg_score_lr" type="radio"
                                    checked={metric === "avg_score_lr"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline label="Naive Bayes" value="avg_score_nb" type="radio"
                                    checked={metric === "avg_score_nb"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline label="BERT Transformer" value="avg_score_bert" type="radio"
                                    checked={metric === "avg_score_bert"}
                                    onChange={this.handleModelSelect}
                                />
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </span>
        )
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        //this.fetchData()
        setTimeout(function(){
            this.setState({parsedResponse: cachedData})
        }.bind(this), 1000) // let you see the spinner
    }

    handleModelSelect(changeEvent){
        var val = changeEvent.target.value
        console.log("SELECT MODEL / METRIC:", val)
        this.setState({metric: val})
    }

    handleBarClick(bar){
        console.log("BAR CLICK", bar)
    }

    tooltipLabelFormatter(value){
        //console.log("LABEL FORMATTER", value)
        //return `${value} - ${decimalPrecision(value + 0.05, 2)}`
        return `Mean Pro-Trump Opinion Score (${value} to ${decimalPrecision(value + 0.05, 2)})`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        return [formatNumber(value), "Percentage of Top Users"] // TODO divide by 1000
    }



}
