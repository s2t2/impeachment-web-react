
// adapted from source: https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html
// https://github.com/vasturiano/react-force-graph#data-input

import React, { PureComponent, useEffect, useRef} from 'react'
import { ForceGraph2D } from 'react-force-graph'
import * as d3 from 'd3'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import Spinner from '../../Spinner'
import cachedData from './data'

function nodeClickHandler(node, event){
    console.log("YOU CLICKED", node["id"])
    //window.open(`https://twitter.com/${node["id"]}`, '_blank')
    window.open(`/user-opinions?sn=${node["id"]}`, '_blank')
}

const ForceTree = ({ data }) => {

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

    const containerRef = useRef()
    useEffect(() => {
        // add collision force
        //containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(100 / (node.level + 1))));
        //containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(node["Rate"])));
        containerRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(50)));
    }, [])
    //console.log("GRAPH DATA", data)

    return <ForceGraph2D ref={containerRef} width={900} height={500} backgroundColor="#101020"
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
        //this.fetchData() // temporary for dev
        //setTimeout(function(){
        //    this.setState({parsedResponse: cachedData})
        //}.bind(this), 800) // let you see the spinner
        this.setState({parsedResponse: cachedData})
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
