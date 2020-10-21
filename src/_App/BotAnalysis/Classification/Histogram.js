

import React, { Component } from 'react'

//import Form from 'react-bootstrap/Form'
////import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
////import Dropdown from 'react-bootstrap/Dropdown'
////import Button from 'react-bootstrap/Button'
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
//import Tooltip from 'react-bootstrap/Tooltip'

import {
    VictoryChart, VictoryHistogram, VictoryLabel //VictoryAxis, VictoryLegend
} from 'victory' // VictoryTheme
//import {scaleSequential, interpolateRdBu} from 'd3'
//import ReactGA from 'react-ga'

import cachedData from './bot_probabilities_histogram_20200201'
import Spinner from '../../Spinner'

//import {QuestionIcon} from '@primer/octicons-react'

//const colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

//const modelSelectTooltip = <Tooltip id="model-select-tooltip">
//    See opinion scores from different Impeachment opinion models.
//</Tooltip>

export default class DailyBotProbabilitiesHistogram extends Component {
    constructor(props) {
        super(props)
        this.state = {date: props["date"], parsedResponse:null}
        //this.handleThing = this.handleThing.bind(this)
    }

    render() {
        var spinIntoStuff = <Spinner/>
        if (this.state.parsedResponse) {
            const chartTitle = `Distribution of Bot Probability Scores on ${this.state.date}`

            //var parsedResponse = this.state.parsedResponse


            // OK https://github.com/FormidableLabs/victory/blob/a2067b3cdb27a64314a1951d21e79bcde028c0dd/docs/src/partials/markdown/scope-map.js
            var sampleHistogramData = [
                {x: 0 },
                {x: .1 },
                {x: .1 },
                {x: .1 },
                {x: .1 },
                {x: .2 },
                {x: .2 },
                {x: .3 },
                {x: .4 },
                {x: .7 },
                {x: .7 },
                {x: 1 }
            ]
            //debugger;

            spinIntoStuff = (
                <VictoryChart domainPadding={{x:20}}>
                    <VictoryLabel text={chartTitle}/>

                    <VictoryHistogram
                        data={sampleHistogramData}
                        bins={[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
                        animate={true}
                        //binSpacing={10}
                        //height={100} // not working?
                        labels={({ datum }) => datum.y > 0 ? datum.y : ""} // don't show zeros
                        //labels={({ datum }) => datum.y}
                        labelComponent={<VictoryLabel dy={-5}/>}
                        style={{
                            data: { fill: "#ccc" },
                            labels: {
                                //fill: "white"
                                fontSize: 10
                            }
                        }}
                    />
                </VictoryChart>
            )
        }

        return (
            <span>
                {spinIntoStuff}
            </span>
        )
    }

    componentDidMount(){
        console.log("HISTOGRAM DID MOUNT")
        // fetch daily data OR agile mode:
        this.setState({parsedResponse: cachedData})
    }
    componentDidUpdate(prevProps) { console.log("HISTOGRAM DID UPDATE") }
}
