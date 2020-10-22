import React from 'react'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label ,Tooltip //, Legend,
} from 'recharts'
//import {orderBy} from 'lodash'

import Spinner from "../../Spinner"
import cachedData from './data'

//var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

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
                    <Card.Text className="app-center">
                        Tweets Collected by Day
                    </Card.Text>

                    <div style={{width: "100%", height: 400}}>
                        <ResponsiveContainer>
                            <AreaChart data={data} layout="horizontal" margin={{top: 0, right: 15, left: 15, bottom: 20}} barCategoryGap={2}>
                                <YAxis type="number" dataKey="status_count">
                                    <Label value="Tweet Count" position="insideLeft" angle={-90} offset={-10} style={{textAnchor: 'middle'}}/>
                                </YAxis>
                                <XAxis type="category" dataKey="date" tick={{fontSize: 14}}>
                                    <Label value="Collection Date" position="insideBottom" offset={-15}/>
                                </XAxis>
                                <CartesianGrid strokeDasharray="1 1"/>
                                {/*
                                <Legend/>
                                */}
                                <Tooltip/>

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

    //fetchData() {
    //    var requestUrl = `${API_URL}/api/v1/daily_collection_results/${date}`
    //    console.log("REQUEST URL:", requestUrl)
    //    fetch(requestUrl).then(function (response) {
    //        // console.log("RAW RESPONSE", "STATUS", response.status, response.statusText,
    //        // response.ok, "HEADERS", response.headers, response.url)
    //        return response.json()
    //    })
    //    .then(function (json) {
    //        console.log("FETCHED", json.length, "ITEMS")
    //        this.setState({parsedResponse: json})
    //    }.bind(this))
    //    .catch(function (err) {
    //        console.error("FETCH ERR", err)
    //    })
    //}

}
