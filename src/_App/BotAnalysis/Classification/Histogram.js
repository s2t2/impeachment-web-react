

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
                {x: 1 },
                {x: 1 },
                {x: 1 },
                {x: 1 },
                {x: 2 },
                {x: 2 },
                {x: 3 },
                {x: 4 },
                {x: 7 },
                {x: 7 },
                {x: 10 }
            ]
            //debugger;

            spinIntoStuff = (
                <VictoryChart domainPadding={{x:20}}>
                    <VictoryLabel text={chartTitle}/>

                    <VictoryHistogram
                        data={sampleHistogramData}
                        bins={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        style={{data: { fill: "#ccc" }}}
                        animate={true}
                        //binSpacing={10}
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
