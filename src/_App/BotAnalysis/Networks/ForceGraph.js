import React, { PureComponent } from 'react'

import * as d3 from 'd3'

import {drag} from 'd3'
import {forceSimulation} from 'd3-force'
import {select, event as currentEvent} from 'd3-selection'

//import {groupBy, orderBy} from "lodash"
//import ReactGA from 'react-ga'
import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

//import {formatPct} from '../../Utils/Decorators'
//import {opinionShiftScale as colorScale} from '../../Utils/Colors'
import Spinner from '../../Spinner'
import json from './data'

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

                    <div className="force-graph-container"/>
                </Card.Body>
            </Card>
        )
    }

    componentDidMount() {
        console.log("FORCE GRAPH DID MOUNT")

        var h = 500, w = 960

        var svg = select("div.force-graph-container").append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .style("border", "1px solid black")

        var force = forceSimulation(json.nodes) //Force()
                //.links(json.links)
                //.gravity(.05)
                //.distance(100)
                //.charge(-100)
                //.size([w, h])
                //.start()

        //var node_drag = drag()
        //    .on("dragstart", dragstart)
        //    .on("drag", dragmove)
        //    .on("dragend", dragend)
//
        //function dragstart(d, i) {
        //    force.stop() // stops the force auto positioning before you start dragging
        //}
//
        //function dragmove(d, i) {
        //    d.px += currentEvent.dx;
        //    d.py += currentEvent.dy;
        //    d.x += currentEvent.dx;
        //    d.y += currentEvent.dy;
        //    tick() // this is the key to make it work together with updating both px,py,x,y on d !
        //}
//
        //function dragend(d, i) {
        //    d.fixed = true; // of course set the node to fixed so the force doesn't include the node in its auto positioning stuff
        //    tick()
        //    force.resume()
        //}
//
        ////
        //// <CUSTOMIZE>
        ////
//
        //var link = svg.selectAll("line.link").data(json.links).enter().append("svg:line").attr("class", "link")
        //    .attr("x1", function(d) { return d.source.x; })
        //    .attr("y1", function(d) { return d.source.y; })
        //    .attr("x2", function(d) { return d.target.x; })
        //    .attr("y2", function(d) { return d.target.y; })
//
        //var node = svg.selectAll("g.node").data(json.nodes).enter().append("svg:g").attr("class", "node")
        //    .call(node_drag);
//
        ////node.append("svg:image")
        ////    .attr("class", "circle")
        ////    .attr("xlink:href", "https://img.icons8.com/plasticine/1x/bot.png") // raise up to 2x if you need to increase the circle size below)
        ////    .attr("x", "-8px")
        ////    .attr("y", "-8px")
        ////    .attr("height", function(d) { return (5 * d.weight) + "px"; }) //.attr("height", circleHeight + "px");
        ////    .attr("width", function(d) { return (5 * d.weight) + "px"; }) //.attr("width", circleWidth + "px")
        ////node.append("svg:text")
        ////    .attr("class", "node-text")
        ////    .attr("dx", 12)
        ////    .attr("dy", ".35em")
        ////    .text(function(d) { return d.name });
//
        //node.append("svg:circle")
        //    .attr("cx", 0)
        //    .attr("cy", 0)
        //    .attr("r", function(d) { return d.weight; })  // .attr("r", 25)
        //    .style("fill", "white")
        //    .attr("stroke", "black")
//
//
        ////
        //// </CUSTOMIZE>
        ////
//
        //force.on("tick", tick);
//
        //function tick() {
        //    link.attr("x1", function(d) { return d.source.x; })
        //        .attr("y1", function(d) { return d.source.y; })
        //        .attr("x2", function(d) { return d.target.x; })
        //        .attr("y2", function(d) { return d.target.y; });
//
        //    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
        //}

    }

}
