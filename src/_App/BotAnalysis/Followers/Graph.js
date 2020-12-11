// adapted from source:
// ... https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html
// ... https://github.com/vasturiano/react-force-graph#data-input
//
// see also:
// ... https://github.com/ctrlplusb/react-sizeme
// ... https://github.com/vasturiano/react-force-graph/issues/233

import React, { PureComponent, createRef} from 'react'
import { ForceGraph2D } from 'react-force-graph'
import { withSize } from 'react-sizeme'

var exampleData = {
    nodes:[
        {"id":"node1", "__label":"Julia"},
        {"id":"node2", "__label":"Bob"},
    ],
    links:[
        {"id":"link1", "source":"node1", "target":"node2"}
    ]
}

const withSizeHOC = withSize({monitorWidth:true, monitorHeight:false, noPlaceholder:true})

class ExampleGraph extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
        this.containerRef = createRef()
        //this.handleResize = this.handleResize.bind(this)
    }

    render() {
        var width = this.props.size.width
        var data = this.props.data || exampleData

        return (
            <ForceGraph2D
                ref={this.containerRef}
                width={width}
                height={400}
                backgroundColor="#101020"
                graphData={data}

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
}

export default withSizeHOC(ExampleGraph)
