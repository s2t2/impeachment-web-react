import React, { PureComponent } from 'react'
//import * as d3 from 'd3'
//import {drag} from 'd3'
//import {forceSimulation} from 'd3-force'
//import {select, event as currentEvent} from 'd3-selection'
//import {groupBy, orderBy} from "lodash"

//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'
//import cachedData from './data'
//import {formatPct} from '../../Utils/Decorators'
//import {opinionShiftScale as colorScale} from '../../Utils/Colors'

export default class NetworkGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null}
    }

    render() {
        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                    {this.state.parsedResponse ? <p>Hello</p> : <Spinner/>}
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
