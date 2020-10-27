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
        //var spinIntoChart = <Spinner/>

        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                   <Card.Text className="app-center">
                        Bot Networks
                    </Card.Text>

                    <div className="force-graph-container"
                        // style={{width: "100%", height: 500}}
                    >
                    </div>
                </Card.Body>
            </Card>
        )
    }

    componentDidMount() {
        console.log("FORCE GRAPH DID MOUNT")


    }

}
