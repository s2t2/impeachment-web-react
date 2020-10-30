import React, { PureComponent} from 'react' //createRef, useState, useEffect, useRef
import * as d3 from 'd3'

import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'
import cachedData from './data'
import ForceTree from './ForceTree1'

const MOCK_DATA_MODE = true

export default class NetworkGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null} // orientation: "td",
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
                        //<Row>
                        //    <Col md={12}>
                        //        <ForceTree data={this.state.parsedResponse}/>
                        //    </Col>
                        //</Row>
                    }
                </Card.Body>
            </Card>
        )
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")

        if(MOCK_DATA_MODE){
            this.fetchData()
        } else {
            this.setState({parsedResponse: cachedData})
            //setTimeout(function(){
            //    this.setState({parsedResponse: cachedData})
            //}.bind(this), 1000) // let you see the spinner
        }
    }

    fetchData() {
        // https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html
        const requestUrl = "https://raw.githubusercontent.com/vasturiano/react-force-graph/master/example/datasets/d3-dependencies.csv"
        console.log("REQUEST URL:", requestUrl)
        fetch(requestUrl)
        .then(r => r.text())
        .then(d3.csvParse)
        .then(data => {
            const nodes = [], links = []

            data.forEach(({ size, path }) => {
                const levels = path.split('/')
                const level = levels.length - 1
                const module = level > 0 ? levels[1] : null
                const leaf = levels.pop()
                const parent = levels.join('/')

                const node = {
                    path,
                    leaf,
                    module,
                    size: +size || 20,
                    level
                };

                nodes.push(node)

                if (parent) {
                    links.push({source: parent, target: path,
                    //targetNode: node
                    })
                }
            })

            this.setState({parsedResponse: {nodes: nodes, links: links}})

        })

    }

}
