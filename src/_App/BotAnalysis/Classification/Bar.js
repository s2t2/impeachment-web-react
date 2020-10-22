import React from 'react'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label} from 'recharts'
//import {orderBy} from 'lodash'

//import Spinner from "../../Spinner"
import cachedData from './bot_probabilities_histogram_20200201'

//var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class ProfileHashtags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: props["date"], parsedResponse: cachedData}
        //this.fetchData = this.fetchData.bind(this)
    }

    render() {
        const chartTitle = `Distribution of Bot Probability Scores on ${this.state.date}`

        var data = this.state.parsedResponse
            //.filter(function(bar){
            //    return bar["category"] !== 0.5 // filter out because scale is so different
            //})
        var barFill = "#ccc"
        console.log("DATA", data, "FILL", barFill)

        return (
            <span>
                <Card>
                    <Card.Body>
                        <Card.Text className="app-center">
                            {chartTitle}
                            <br/>
                            <small>Excludes the vast majority of users with default score of 0.5</small>
                        </Card.Text>

                        <div style={{width: "100%", height: 350}}>
                            <ResponsiveContainer>
                                <BarChart data={data} layout="horizontal" margin={{top: 0, right: 5, left: 5, bottom: 20}} barCategoryGap={2}>
                                    <YAxis type="number" dataKey="frequency">
                                        <Label value="User Count" position="insideLeft" angle={-90} offset={0} style={{textAnchor: 'middle'}}/>
                                    </YAxis>
                                    <XAxis type="category" dataKey="category" scale="band" tick={{fontSize: 14}}>
                                        <Label value="Bot Probability (binned)" position="insideBottom" offset={-15}/>
                                    </XAxis>
                                    <CartesianGrid strokeDasharray="1 1"/>

                                    {/*
                                        <Tooltip/>
                                        <Legend/>
                                    */}
                                    <Bar dataKey="frequency" fill={barFill}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                       {/*

                        <Card.Text className="app-center">
                            <small>Excludes the vast majority of users with default score of 0.5</small>
                        </Card.Text>

                       */}

                    </Card.Body>
                </Card>
            </span>
        );
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        //this.fetchData()
        //this.setState({parsedResponse: cachedData})
    }

    //fetchData() {
    //    var requestUrl = `${API_URL}/api/v0/top_profile_tags?limit=20`
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
