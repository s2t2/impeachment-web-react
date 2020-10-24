import React from 'react'
import Card from 'react-bootstrap/Card'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label ,Tooltip //, Legend,
} from 'recharts'

import Spinner from "../../Spinner"
import {numberLabel, formatNumber} from "../../Utils/Decorators"
import cachedData from './data'

export default class ProfileHashtags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: props["date"], parsedResponse: null}
        //this.fetchData = this.fetchData.bind(this)
    }

    render() {
        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
                //.filter(function(bar){
                //    return bar["category"] !== 0.5 // filter out because scale is so different
                //})

            spinIntoChart = (
                <span>
                    <Card.Text className="app-center" >
                        Tweets Collected by Day
                    </Card.Text>

                    <div style={{width: "100%", height: 400}}>
                        <ResponsiveContainer>
                            <AreaChart data={data} layout="horizontal" margin={{top: 0, right: 15, left: 15, bottom: 20}} barCategoryGap={2}>
                                <YAxis type="number" dataKey="status_count" tickFormatter={numberLabel}>
                                    <Label value="Tweet Count" position="insideLeft" angle={-90} offset={-5} style={{textAnchor: 'middle'}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="date" tick={{fontSize: 14}}>
                                    <Label value="Collection Date" position="insideBottom" offset={-15}/>
                                </XAxis>
                                <CartesianGrid strokeDasharray="1 1"/>
                                {/*
                                <Legend/>
                                */}
                                <Tooltip
                                    //content={this.tooltipContent}
                                    cursor={{fill: 'transparent', stroke:'#000'}}
                                    //cursor={false}
                                    //position={{ y:-5 }}
                                    labelFormatter={this.tooltipLabelFormatter}
                                    formatter={this.tooltipFormatter}
                                />

                                <Area dataKey="status_count" stroke="#000" fill="#ccc" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </span>
            )
        }
        return (
            <span>
                <Card>
                    <Card.Body style={{paddingTop:0}}>
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

    tooltipLabelFormatter(value){
        //console.log("LABEL FORMATTER", value)
        //return `${value} - ${decimalPrecision(value + 0.05, 2)}`
        return `Date : ${value}`
    }

    tooltipFormatter(value, name, props){
        //console.log("FORMATTER", value, name, props)
        return [formatNumber(value), "Tweet Count"]
    }

}
