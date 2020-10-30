import React, { PureComponent, createRef } from 'react'
//import * as d3 from 'd3'
//import {drag} from 'd3'
//import {forceSimulation} from 'd3-force'
//import {select, event as currentEvent} from 'd3-selection'
//import {groupBy, orderBy} from "lodash"
import { ForceGraph2D } from 'react-force-graph'

//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'
import cachedData from './communitiesNetwork'
//import {formatPct} from '../../Utils/Decorators'
//import {opinionShiftScale as colorScale} from '../../Utils/Colors'


export default class NetworkGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {orientation: "td", parsedResponse: cachedData}
        this.containerRef = createRef()
    }

    render() {
        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                    {!this.state.parsedResponse ?
                        <Spinner/> :
                        <ForceGraph2D
                            ref={this.containerRef}
                            graphData={this.state.parsedResponse}
                            dagMode={this.state.orientation}
                            dagLevelDistance={300}
                            backgroundColor="#fff" //"#101020"
                            linkColor={() => 'rgba(255,255,255,0.2)'}
                            nodeRelSize={1}
                            nodeId="path"
                            nodeVal={node => 100 / (node.level + 1)}
                            nodeLabel="path"
                            nodeAutoColorBy="module"
                            linkDirectionalParticles={2}
                            linkDirectionalParticleWidth={2}
                            d3VelocityDecay={0.3}
                        />
                    }
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
