
import React, {PureComponent} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//import {legendBlue, legendRed} from "../../Utils/Colors"

//import Graph from "./Graph" // "./ExampleSizemeGraph"
//import {data0, data1} from "./ExampleData.js"

import * as d3 from 'd3'

import Bot0FollowerNodes from './Bot0FollowerNodes.csv'
import Bot0FollowerLinks from './Bot0FollowerLinks.csv'
// user_id, screen_name_count, screen_names, is_bot, status_count, mean_opinion, follower_count, friend_count


export default class BotFollowersSection extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Container fluid>
                <Card>
                    <Card.Body>
                        <Card.Title><h3>Bot Follower Networks</h3></Card.Title>

                        <Card.Text>
                            The graphs below present the network of users who follow bots in each <a href="/bot-opinions">bot opinion community</a>.
                        </Card.Text>

                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text className="app-center">Anti-Trump Bot Followers</Card.Text>
                                        {/*
                                        <Graph key="network-0" data={data0} nodeColor={legendBlue}/>
                                        */}
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} md={12} lg={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Text className="app-center">Pro-Trump Bot Followers</Card.Text>
                                        {/*
                                        <Graph key="network-1" data={data1} nodeColor={legendRed}/>
                                        */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Container>
        )
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT")

        //d3.csv(Bot0FollowerNodes, function(nodes0) {
        //    console.log("NODES-0:", nodes0.length, nodes0[0])
        //    this.setState({nodes0: nodes0})
        //}.bind(this))

        //d3.csv(Bot0FollowerNodes).then(function(data) {
        //    console.log("NODES-0:", data.length, data[0])
        //    this.setState({nodes0: data})
        //}.bind(this))

        //d3.csv(Bot0FollowerLinks).then(function(data) {
        //    console.log("LINKS-0:", data.length, data[0])
        //    this.setState({links0: data})
        //}.bind(this))


        Promise.all([
            d3.csv(Bot0FollowerNodes),
            d3.csv(Bot0FollowerLinks),
        ]).then(function(files) {
            // files[0] will contain Bot0FollowerNodes
            // files[1] will contain Bot0FollowerLinks
            console.log(files[0].length)
            console.log(files[1].length)
        }).catch(function(err) {
            console.log("ERROR LOADING THE DATA :-(")
            console.log(err)
        })


    }

}
