import React, { PureComponent } from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip, Cell} from 'recharts'
//import {groupBy, orderBy} from "lodash"
//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import {formatPct} from '../../Utils/Decorators'
import {opinionShiftScale as colorScale} from '../../Utils/Colors'
import Spinner from '../../Spinner'
import cachedData from '../../../data/bot_impact/assess_all_days.js' //'./data'

const METRICS = {
  "mean_opinion_shift": {
        "chartTitle": "Daily Bot-Induced Opinion Shift",
        "yAxisLabel": "Mean Pro-Trump Opinion Shift", "yAxisDomain": [-0.15, 0.09]
    }
}

export default class DailyActivity extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {metric: "mean_opinion_shift",parsedResponse: null}
        this.barFill = this.barFill.bind(this)
        this.tooltipFormatter = this.tooltipFormatter.bind(this)
    }

    render() {
        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var metric = this.state.metric
            var data = this.state.parsedResponse
            //console.log("DAILY OPINION SHIFT DATA", data)

            data = data.map(function(daily){
                daily["mean_opinion_shift"] = daily["mean_opinion_equilibrium_bot"] - daily["mean_opinion_equilibrium_nobot"]
                return daily
            })
            //console.log("DAILY OPINION SHIFT DATA 2", data)

            const chartTitle = METRICS[metric]["chartTitle"]
            const chartSubtitle = `Opinion Model: BERT Transformer`
            const yAxisDomain = METRICS[metric]["yAxisDomain"]
            const yAxisLabel = METRICS[metric]["yAxisLabel"]

            spinIntoChart = (
                <span>
                    <Card.Text className="app-center">
                        {chartTitle}

                        <br/>
                        <small>{chartSubtitle}</small>
                        {/*
                        */}
                    </Card.Text>

                    {/*
                    */}

                    <div style={{width: "100%", height: 500}}>
                        <ResponsiveContainer>
                            <BarChart data={data} layout="horizontal" margin={{top: 0, bottom: 20, left: 5, right: 30}} barCategoryGap={0}>
                                <YAxis type="number" dataKey={metric} domain={yAxisDomain}>
                                    <Label value={yAxisLabel} position="insideLeft" angle={-90} offset={0} style={{textAnchor: 'middle'}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="date" tick={{fontSize: 14}}>
                                    <Label value="Date" position="insideBottom" offset={-15}/>
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
                                <Bar dataKey={metric} fill="#ccc" onClick={this.handleBarClick}>
                                    {
                                        data.map((entry, index) => (
                                            <Cell key={entry["date"]} fill={this.barFill(entry[metric])}/>
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

    handleBarClick(bar){
        console.log("BAR CLICK", bar)
    }

    barFill(val){
        //return "steelblue"
        return colorScale(parseFloat(val))
    }

    tooltipLabelFormatter(value){
        return `Date : ${value}`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        const metric = this.state.metric
        return [formatPct(value), METRICS[metric]["yAxisLabel"]]
    }

}
