
// adapted from source: https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html
// https://github.com/vasturiano/react-force-graph#data-input

import React, { PureComponent, createRef, useEffect, useRef} from 'react'
import { ForceGraph2D } from 'react-force-graph'
import * as d3 from 'd3'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import ReactGA from 'react-ga'

import Spinner from '../../Spinner'
import cachedData from './data'

//function MyGraph(props){
//    var height = props.height || 500
//    var width = props.width || 300 // todo: use container ref instead
//
//    return <span>
//        <p>Height: {height} Width: {width}</p>
//        <svg height={height} width={width} style={{border:"1px solid black"}}></svg>
//    </span>
//}

function nodeClickHandler(node, event){
    console.log("YOU CLICKED", node["id"])
    ReactGA.event({category: "Bot Networks", action: "Click Node", label: node["id"]})
    //window.open(`https://twitter.com/${node["id"]}`, '_blank')
    window.open(`/user-opinions?sn=${node["id"]}`, '_blank')
}

function MyGraph(props){
    var height = props.height || 500
    var width = props.width || 300 // todo: use container ref instead
    var data = props.data

    data["nodes"] = data["nodes"].map(function(node){
        return {
            "id": node["id"], // NODE ID
            "mean_opinion": node["opinion"],
            "status_count": node["Rate"],
            "color": node["color"], // NODE COLOR
            //"x": node["xcoord"],
            //"y": node["ycoord"],
        }
    })

    data["links"] = data["links"].map(function(link){
        return {
            "source": link["source"], // SOURCE NODE ID
            "target": link["target"], // TARGET NODE ID
            //"weight": link["weight"],
        }
    })

    //console.log("GRAPH DATA", data)

    const containerRef = useRef()
    useEffect(() => {
        // add collision force
        //containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(100 / (node.level + 1))));
        //containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(node["Rate"])));
        containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(50)));
    }, [])

    return <ForceGraph2D ref={containerRef} width={width} height={height} backgroundColor="#101020"
        graphData={data}

        nodeId="id"
        //nodeVal="status_count"
        //nodeVal={node => Math.sqrt(node["status_count"])}
        nodeVal={5}
        nodeLabel={(node) => `@${node["id"]}`}
        nodeRelSize={1}
        onNodeClick={nodeClickHandler}

        //dagMode="td"
        //dagLevelDistance={300}
        linkColor={() => 'rgba(255,255,255,0.2)'} // todo: source opinion color
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        d3VelocityDecay={0.6} // lower numbers push the nodes farther and faster from eachother (keep large to prevent red bots from flying off screen)
    />
}

export default class NetworkGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {parsedResponse: null, width: null}
        this.containerRef = createRef()
        this.handleResize = this.handleResize.bind(this)
    }

    render() {
        return (
            <Card style={{marginBottom:0}}>
                <Card.Body>
                    {!this.state.parsedResponse ?
                        <Spinner/> :

                        <div ref={this.containerRef}>
                            <MyGraph data={this.state.parsedResponse}
                                width={this.state.width} // so it will re-render on window resize
                            />
                        </div>
                    }
                </Card.Body>
            </Card>
        )
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT")
        window.addEventListener("resize", this.handleResize)
        //const width = this.containerRef.current.clientWidth // containerRef is null here
        const width = window.innerWidth * 0.74
        this.setState({parsedResponse:cachedData, width: width})
    }

    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT")
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize(event){
        const width = this.containerRef.current.clientWidth // window.innerWidth * 0.75
        //const width = this.containerRef.current.width
        console.log("RESIZED THE WINDOW!!", width)
        this.setState({width: width})
    }

    componentDidUpdate(){
        //console.log("COMPONENT DID UPDATE")
    }

}
