

import React, { PureComponent } from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, Tooltip, Legend, Cell} from 'recharts'
//import {groupBy, orderBy} from "lodash"
//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

//import {formatPct} from '../../Utils/Decorators'
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

            const chartTitle = `Daily Retweets by Bot Community`

            spinIntoChart = <span>
                <Card.Text className="app-center">
                    {chartTitle}
                </Card.Text>

                <div style={{width: "100%", height: 500}}>
                    <ResponsiveContainer>
                         <BarChart width={500} height={300} data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="community_1" stackId="a" fill={legendRed} />
                            <Bar dataKey="community_0" stackId="a" fill={legendBlue} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </span>
        }

        return (
            <Card>
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
}
