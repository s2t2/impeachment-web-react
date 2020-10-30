import React, { PureComponent,
    //createRef, useState, useEffect, useRef
} from 'react'
import * as d3 from 'd3'

import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'
import cachedData from './communitiesNetwork'
//import {formatPct} from '../../Utils/Decorators'
//import {opinionShiftScale as colorScale} from '../../Utils/Colors'
import ForceTree from './ForceTree'

export default class NetworkGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {orientation: "td", parsedResponse: null}
        //this.containerRef = createRef()
    }

    render() {
        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                    {!this.state.parsedResponse ?
                        <Spinner/> :
                        //<ForceGraph2D
                        //    ref={this.containerRef}
                        //    graphData={this.state.parsedResponse}
                        //    dagMode={this.state.orientation}
                        //    dagLevelDistance={300}
                        //    backgroundColor="#fff" //"#101020"
                        //    linkColor={() => 'rgba(255,255,255,0.2)'}
                        //    nodeRelSize={1}
                        //    nodeId="path"
                        //    nodeVal={node => 100 / (node.level + 1)}
                        //    nodeLabel="path"
                        //    nodeAutoColorBy="module"
                        //    linkDirectionalParticles={2}
                        //    linkDirectionalParticleWidth={2}
                        //    d3VelocityDecay={0.3}
                        ///>
                        //<ForceTree data={{ nodes, links }}/>
                        <ForceTree data={this.state.parsedResponse}/>
                    }
                </Card.Body>
            </Card>
        )
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        this.fetchData()
        //setTimeout(function(){
        //    this.setState({parsedResponse: cachedData})
        //}.bind(this), 1000) // let you see the spinner
    }

    fetchData() {
        const requestUrl = "https://raw.githubusercontent.com/vasturiano/react-force-graph/master/example/datasets/d3-dependencies.csv"
        console.log("REQUEST URL:", requestUrl)
        //fetch(requestUrl).then(function (response) {
        //    // console.log("RAW RESPONSE", "STATUS", response.status, response.statusText,
        //    // response.ok, "HEADERS", response.headers, response.url)
        //    return response.json()
        //})
        //.then(function (json) {
        //    console.log("FETCHED", json.length, "ITEMS")
        //    this.setState({parsedResponse: json})
        //}.bind(this))
        //.catch(function (err) {
        //    console.error("FETCH ERR", err)
        //})
        fetch(requestUrl)
        .then(r => r.text())
        .then(d3.csvParse)
        .then(data => {
            const nodes = [], links = []

            data.forEach(({ size, path }) => {
                const levels = path.split('/'),
                    level = levels.length - 1,
                    module = level > 0 ? levels[1] : null,
                    leaf = levels.pop(),
                    parent = levels.join('/')

                const node = {
                    path,
                    leaf,
                    module,
                    size: +size || 20,
                    level
                };

                nodes.push(node);

                if (parent) {
                    links.push({source: parent, target: path, targetNode: node});
                }
            })

            this.setState({parsedResponse: {nodes: nodes, links: links}})

        })

    }

}
