

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
//import { parse } from 'date-fns'

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
            const parsedResponse = this.state.parsedResponse

            // OK https://github.com/FormidableLabs/victory/blob/a2067b3cdb27a64314a1951d21e79bcde028c0dd/docs/src/partials/markdown/scope-map.js
            //var bins = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
            var data = [{x:0}, {x:.1 }, {x: .1 }, {x: .1 }, {x: .1 }, {x: .2 }, {x: .2 }, {x: .3 }, {x: .4 }, {x: .7 }, {x: .7 }, {x: 1 }]

            //debugger;
            //var bins = parsedResponse["bin_edges"]
            //var data = parsedResponse["hist"].map(function(val){
            //    return {x: val}
            //}) // why isn't this working?

            var bins = [0, 0.5, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1]





            console.log("BINS", bins)
            console.log("DATA", data)

            spinIntoStuff = (
                <VictoryChart domainPadding={{x:20}} padding={50}>
                    <VictoryLabel
                        text={chartTitle}
                        x={70}
                        y={10}
                        //textAnchor="center"
                        //style={}
                    />
                    <VictoryLabel
                        text="Excludes users with default bot score of 0.5"
                        x={130}
                        y={25}
                        //textAnchor="center"
                        style={{fontSize:10}}
                    />

                    <VictoryHistogram data={data} bins={bins}
                        animate={true}
                        //binSpacing={10} // not a bar chart, so no thanks.
                        //height={100} // not working? probably due to nesting inside a VictoryChart
                        labels={({ datum }) => datum.y > 0 ? datum.y : ""} // don't show zeros
                        //labels={({ datum }) => datum.y}
                        labelComponent={<VictoryLabel dy={-5}/>} // label bars a bit above the bar
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








// The best practice for any dataviz is to have a chart title. The default placement of a chart title is usually in the top middle. But currently the default nesting of `VictoryLabel` inside `VictoryChart` places the title out of frame / not visible.
//
// I think the problem is I'm a little rusty on styling `svg` and `g` elements so if we could add some example chart title positioning to the docs using the existing API, I think that would help. like do we have to transform translate the
