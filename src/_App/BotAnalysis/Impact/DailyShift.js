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
import cachedData from './data'

export default class DailyOpinionShift extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
        this.barFill = this.barFill.bind(this)
    }

    render() {
        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
            console.log("DAILY OPINION SHIFT DATA", data)


            // debugger;

            data = data.map(function(daily){
                daily["mean_opinion_shift"] = daily["mean_opinion_equilibrium_bot"] - daily["mean_opinion_equilibrium_nobot"]
                return daily
            })
            console.log("DAILY OPINION SHIFT DATA 2", data)


            //data = groupBy(data, "binned_score") //> a dictionary with keys as the categories and a list of values
            //data = Object.entries(data).map(function([binnedScore, users]){
            //    return {"category": binnedScore, "frequency": users.length / 1000.0} // divide by 1000 to get percentage of top 1000 users
            //})
            //data = orderBy(data, "category")
            //console.log(data)

            const chartTitle = `Bot-Induced Daily Opinion Shift`
            //const chartSubtitle = `Opinion Model: BERT Transformer`

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
                            <BarChart data={data} layout="horizontal" margin={{top: 0, bottom: 20, left: 5, right: 30}} barCategoryGap={0}>
                                <YAxis type="number" dataKey="mean_opinion_shift" domain={[-0.07, 0.04]}>
                                    <Label value="Mean Pro-Trump Opinion Shift" position="insideLeft" angle={-90} offset={0} style={{textAnchor: 'middle'}}/>
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
                                <Bar dataKey="mean_opinion_shift" fill="#ccc" onClick={this.handleBarClick}>
                                    {
                                        data.map((entry, index) => (
                                            //console.log("ENTRY", entry)
                                            //<Cell fill="steelblue"/>
                                            //<Cell fill={this.barFill(data[index])}/>
                                            <Cell key={entry["date"]} fill={this.barFill(entry)}/>
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

    barFill(bar){
        //console.log("BAR FILL", bar)
        //return "steelblue"
        return colorScale(parseFloat(bar["mean_opinion_shift"]))
    }

    tooltipLabelFormatter(value){
        return `Date : ${value}`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        return [formatPct(value), "Mean Pro-Trump Opinion Shift"]
    }

}
