import React, { PureComponent } from 'react'
//import {groupBy, orderBy} from "lodash"
//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

//import {formatPct} from '../../Utils/Decorators'
//import {opinionShiftScale as colorScale} from '../../Utils/Colors'
import Spinner from '../../Spinner'
//import cachedData from './data'

export default class DailyOpinionShift extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
    }

    render() {
        var spinIntoChart = <Spinner/>

        if(this.state.parsedResponse){
            var data = this.state.parsedResponse
            console.log("NETWORK GRAPH DATA", data)

            //data = data.map(function(daily){
            //    daily["mean_opinion_shift"] = daily["mean_opinion_equilibrium_bot"] - daily["mean_opinion_equilibrium_nobot"]
            //    return daily
            //})
            //console.log("DAILY OPINION SHIFT DATA 2", data)

            const chartTitle = `Bot Networks`
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

                    <div style={{width: "100%", height: 500}}>
                        <p>There will be a graph here.</p>
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
        //setTimeout(function(){
        //    this.setState({parsedResponse: cachedData})
        //}.bind(this), 1000) // let you see the spinner
    }

}
