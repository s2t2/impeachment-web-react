

import React, { PureComponent } from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip, Legend, Cell} from 'recharts'
//import {groupBy, orderBy} from "lodash"
//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

//import {formatPct} from '../../Utils/Decorators'
import {numberLabel, bigNumberLabel} from "../../Utils/Decorators"
import {legendBlue, legendRed} from '../../Utils/Colors'
import Spinner from '../../Spinner'
//import cachedData from './data'


const cachedData = [
    {"date": '2020-01-01', "community_0": 40000, "community_1": 2400},
    {"date": '2020-01-02', "community_0": 30000, "community_1": 1398},
    {"date": '2020-01-03', "community_0": 20000, "community_1": 9800},
    {"date": '2020-01-04', "community_0": 27800, "community_1": 3908},
    {"date": '2020-01-05', "community_0": 18900, "community_1": 4800},
    {"date": '2020-01-06', "community_0": 23900, "community_1": 3800},
    {"date": '2020-01-07', "community_0": 34900, "community_1": 4300},
]

export default class DailyRetweets extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
    }

    render() {
        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
            console.log("DAILY RT VOLUME", data)

            data = data.map(function(daily){
                daily["Community 0"] = daily["community_0"]
                daily["Community 1"] = daily["community_1"]
                return daily
            })
            console.log("DAILY", data)


            const chartTitle = `Daily Retweets by Bot Community`

            spinIntoChart = <span>
                <Card.Text className="app-center" style={{marginBottom:0}}>
                    {chartTitle}
                </Card.Text>

                <div style={{width: "100%", height: 400}}>
                    <ResponsiveContainer>
                         <BarChart data={data} margin={{top: 5, right: 40, left: 20, bottom: 20}}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <Legend verticalAlign="top" align="center" iconType="circle" wrapperStyle={{top:-10, left:40}}/>

                            <YAxis tickFormatter={bigNumberLabel}>
                                <Label value="Retweet Count" position="insideLeft" angle={-90} offset={0} style={{textAnchor: "middle"}}/>
                            </YAxis>
                            <XAxis type="category" dataKey="date" tick={{fontSize: 14}}>
                                <Label value="Date" position="insideBottom" offset={-15}/>
                            </XAxis>

                            <Bar dataKey="Community 1" stackId="a" fill={legendRed}  onClick={this.handleBarClick}/>
                            <Bar dataKey="Community 0" stackId="a" fill={legendBlue} onClick={this.handleBarClick}/>

                            <Tooltip
                                //content={this.tooltipContent}
                                cursor={{fill: 'transparent', stroke:'#000'}}
                                //cursor={false}
                                //position={{ y:-5 }}
                                labelFormatter={this.tooltipLabelFormatter}
                                formatter={this.tooltipFormatter}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

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

    handleBarClick(bar){
        console.log("BAR CLICK", bar)
    }

    tooltipLabelFormatter(value){
        return `Date : ${value}`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        return [numberLabel(value), name] // TODO: COMMUNITIES[name]["title"]
    }
}
