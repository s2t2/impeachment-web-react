
// adapted from source: https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html

import React, { PureComponent, useEffect, useRef} from 'react'
import { ForceGraph2D } from 'react-force-graph'
import * as d3 from 'd3'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'
import cachedData from './data'

const ForceTree = ({ data }) => {
    const containerRef = useRef()
    useEffect(() => {
        // add collision force
        //containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(100 / (node.level + 1))));
        //containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(node["Rate"])));
        containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(50)));
    }, [])
    //console.log("GRAPH DATA", data)

    return <ForceGraph2D ref={containerRef} width={900} height={550}
        graphData={data}
        nodeId="id"
        nodeVal={node => Math.sqrt(50)}
        nodeLabel="Name"
        nodeAutoColorBy="color"

        dagMode="td"
        dagLevelDistance={300}
        backgroundColor="#101020"
        linkColor={() => 'rgba(255,255,255,0.2)'}
        nodeRelSize={1}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        d3VelocityDecay={0.3}
    />
}

export default class NetworkGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null} // orientation: "td",
    }

    render() {
        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                    {!this.state.parsedResponse ?
                        <Spinner/> :
                        <ForceTree data={this.state.parsedResponse}/>
                    }
                </Card.Body>
            </Card>
        )
    }

    componentDidMount() {
        console.log("DASHBOARD DID MOUNT")
        this.fetchData() // temporary for dev
        setTimeout(function(){
            this.setState({parsedResponse: cachedData})
        }.bind(this), 800) // let you see the spinner
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
                }
                //console.log(node)

                nodes.push(node)

                if (parent) {
                    links.push({source: parent, target: path,
                    //targetNode: node
                    })
                }
            })

            console.log("NODES", nodes)
            console.log("LINKS", links)
            //this.setState({parsedResponse: {nodes: nodes, links: links}})

        })

    }

}
