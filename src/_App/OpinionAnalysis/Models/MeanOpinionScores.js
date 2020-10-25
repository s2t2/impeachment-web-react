import React, { PureComponent } from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip, Cell} from 'recharts'
import {groupBy, orderBy //values, chain, uniqBy
} from "lodash"
import ReactGA from 'react-ga'

import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import BootstrapTooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {QuestionIcon} from '@primer/octicons-react'

import {formatPct} from "../../Utils/Decorators" // decimalPrecision
import {colorScale} from "../../Utils/Colors"
import Spinner from "../../Spinner"
import cachedData from '../TopUsers/data'

const MODEL_LABELS = {
    "avg_score_lr": "Logistic Regression",
    "avg_score_nb": "Naive Bayes",
    "avg_score_bert": "BERT Transformer",
}

const modelSelectTooltip = <BootstrapTooltip className="model-select-tooltip-mean-opinion-scores">
    See opinion scores from different Impeachment opinion models.
</BootstrapTooltip>

function binnedScore(number){
    // bins scores by 0.5
    // adapted from: https://stackoverflow.com/a/10413602/670433
    //return (Math.floor(number*20)/20).toFixed(2)
    // bins 1.0 with 0.95
    //if(number === 1){
    //    return 0.95
    //} else if (number === 0){
    //    return 0.05
    //} else {
    //    return (Math.floor(number*20)/20).toFixed(2)
    //}
    return Math.round(number * 20, 2) / 20
}

export default class DailyBotProbabilities extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            metric: props["metric"] || "avg_score_lr",
            parsedResponse: null
        }
        this.barFill = this.barFill.bind(this)
        this.handleModelSelect = this.handleModelSelect.bind(this)
    }

    render() {
        const metric = this.state.metric

        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
            //console.log("DATA", data)
            data = data.map(function(user){ return {"screen_name": user["screen_name"], "binned_score": binnedScore(user[metric])} })
            data = groupBy(data, "binned_score") //> a dictionary with keys as the categories and a list of values
            data = Object.entries(data).map(function([binnedScore, users]){
                return {"category": binnedScore, "frequency": users.length / 1000.0} // divide by 1000 to get percentage of top 1000 users
            })
            data = orderBy(data, "category")
            //console.log(data)

            const chartTitle = `Distribution of Mean Pro-Trump Opinion Scores`
            const chartSubtitle = `Opinion Model: ${MODEL_LABELS[metric]}`

            spinIntoChart = (
                <span>
                    <Card.Text className="app-center">
                        {chartTitle}
                        <br/>
                        <small>{chartSubtitle}</small>
                    </Card.Text>

                    {/* */}
                    <div style={{width: "100%", height: 350}}>
                        <ResponsiveContainer>
                            <BarChart data={data} layout="horizontal" margin={{top: 0, bottom: 20, left: 5, right: 30}} barCategoryGap={1}>
                                <YAxis type="number" dataKey="frequency">
                                    <Label value="Percentage of Top Users" position="insideLeft" angle={-90} offset={0} style={{textAnchor: 'middle'}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="category" tick={{fontSize: 14}}>
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
                                <Bar dataKey="frequency" fill="#ccc" onClick={this.handleBarClick}>
                                    {
                                        data.map((entry, index) => (
                                            //console.log("ENTRY", entry)
                                            //<Cell fill="steelblue"/>
                                            //<Cell fill={this.barFill(data[index])}/>
                                            <Cell key={entry.category} fill={this.barFill(entry)}/>
                                        ))
                                    }
                                </Bar>
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
                                Opinion Model: {" "}
                                <OverlayTrigger placement="top" overlay={modelSelectTooltip}>
                                    <span><QuestionIcon verticalAlign="text-top"/></span>
                                </OverlayTrigger>
                            </Form.Label>

                            <div key="inline-radios" className="mb-3">
                                <Form.Check inline type="radio"
                                    label="Logistic Regression"
                                    value="avg_score_lr"
                                    checked={metric === "avg_score_lr"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline type="radio"
                                    label="Naive Bayes"
                                    value="avg_score_nb"
                                    checked={metric === "avg_score_nb"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline type="radio"
                                    label="BERT Transformer"
                                    value="avg_score_bert"
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
        ReactGA.event({category: "Top User Opinion Scores Histogram", action: "Select Opinion Metric", label: val})
        this.setState({metric: val})
    }

    handleBarClick(bar){
        console.log("BAR CLICK", bar)
    }

    barFill(bar){
        //console.log("BAR FILL", bar)
        //return "steelblue"
        return colorScale(parseFloat(bar.category))
    }

    tooltipLabelFormatter(value){
        //console.log("LABEL FORMATTER", value)
        //return `${value} - ${decimalPrecision(value + 0.05, 2)}`
        //var val = parseFloat(value)

        //if(val >= 0.95){
        //    val + 0.04
        //    label = `Mean Pro-Trump Opinion Score (${val} to 1.00)`
        //} else {
        //    label = `Mean Pro-Trump Opinion Score (${val} to ${decimalPrecision(val + 0.04, 2)})`
        //}

        //var upperBound = (val >= 0.95 ? val + 0.05 : val + 0.04)
        //var label = `Mean Pro-Trump Opinion Score (${val} to ${decimalPrecision(upperBound, 2)})`

        //return `Mean Pro-Trump Opinion Score (${value} to ${decimalPrecision(parseFloat(value) + 0.05, 2)})`

        return `Mean Pro-Trump Opinion Score (binned) : ${value}`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        return [formatPct(value), "Percentage of Top Users"]
    }



}
