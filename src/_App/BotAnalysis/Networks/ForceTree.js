// source: https://github.com/vasturiano/react-force-graph/blob/master/example/tree/index.html

import React, {useState, useEffect, useRef } from 'react'
import { ForceGraph2D } from 'react-force-graph'
import * as d3 from 'd3'

//const useForceUpdate = () => {
//    const setToggle = useState(false)[1]
//    return () => setToggle(b => !b)
//}

const ForceTree = ({ data }) => {
    const fgRef = useRef()

    //const [controls] = useState({ 'DAG Orientation': 'td'});
    //const forceUpdate = useForceUpdate()

    //useEffect(() => {
    //    // add controls GUI
    //    const gui = new dat.GUI()
    //    gui.add(controls, 'DAG Orientation', ['td', 'bu', 'lr', 'rl', 'radialout', 'radialin', null])
    //        .onChange(forceUpdate)
    //}, [])

    useEffect(() => {
        // add collision force
        fgRef.current.d3Force('collision', d3.forceCollide(node => Math.sqrt(100 / (node.level + 1))));
    }, [])

    return <ForceGraph2D
        ref={fgRef}
        graphData={data}
        dagMode="td" // dagMode={controls['DAG Orientation']}
        dagLevelDistance={300}
        backgroundColor="#101020"
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

export default ForceTree
