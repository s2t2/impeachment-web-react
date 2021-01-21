// adapted from source: https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html
// https://github.com/vasturiano/react-force-graph#data-input

import React, { PureComponent, createRef,  //useEffect, useRef
} from 'react'
import { ForceGraph2D } from 'react-force-graph'
//import * as d3 from 'd3'
//import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
//import ReactGA from 'react-ga'

//import Spinner from '../../Spinner'
//import cachedData from './data'

var exampleData = {
    nodes:[
        {"id":"node1", "__label":"Julia"},
        {"id":"node2", "__label":"Bob"},
    ],
    links:[
        {"id":"link1", "source":"node1", "target":"node2"}
    ]
}

export default class ExampleGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
        this.containerRef = createRef()
        //this.handleResize = this.handleResize.bind(this)
    }

    render() {
        return (

            <ForceGraph2D
                ref={this.containerRef}
                width={400}
                height={400}
                backgroundColor="#101020"
                graphData={exampleData}

                nodeId="id"
                //nodeVal="status_count"
                //nodeVal={node => Math.sqrt(node["status_count"])}
                nodeVal={5}

                //nodeColor={this.props.nodeColor}
                nodeColor={(node) => this.props.nodeColor }

                //nodeLabel={(node) => `@${node["id"]}`}
                nodeLabel={(node) => `@${node["__label"]}`}
                nodeRelSize={1}
                //onNodeClick={nodeClickHandler}

                //dagMode="td"
                //dagLevelDistance={300}
                linkColor={() => 'rgba(255,255,255,0.2)'} // todo: source opinion color
                linkDirectionalParticles={2}
                linkDirectionalParticleWidth={2}
                d3VelocityDecay={0.6} // lower numbers push the nodes farther and faster from eachother (keep large to prevent red bots from flying off screen)
            />

        )
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT")
        //window.addEventListener("resize", this.handleResize)
        ////const width = this.containerRef.current.clientWidth // containerRef is null here
        //const width = window.innerWidth * 0.74
        //this.setState({parsedResponse:cachedData, width: width})
    }

    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT")
        //window.removeEventListener("resize", this.handleResize);
    }

    //handleResize(event){
    //    const width = this.containerRef.current.clientWidth // window.innerWidth * 0.75
    //    //const width = this.containerRef.current.width
    //    console.log("RESIZED THE WINDOW!!", width)
    //    this.setState({width: width})
    //}

    //componentDidUpdate(){
    //    //console.log("COMPONENT DID UPDATE")
    //}

}
