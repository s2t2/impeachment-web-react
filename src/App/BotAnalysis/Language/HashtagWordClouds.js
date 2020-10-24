import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ReactWordcloud from 'react-wordcloud'
//import {orderBy} from 'lodash'

const options0 = {
    colors: ["#26456e","#1c5998","#1c73b1","#3a87b7","#67add4","#7bc8e2"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "Source Sans Pro",
    fontSizes: [10, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 2,
    rotations: 2,
    rotationAngles: [0, 20],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
}

const options1 = {
    colors: ["#9c0824","#b10c1d","#c21417","#cf1719","#d8392c","#e35745"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "Source Sans Pro",
    fontSizes: [10, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 2,
    rotations: 2,
    rotationAngles: [0, 20],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
}

export default function WordClouds(props) {
    var {tags} = props
    var metric = "pct"

    var words0 = tags.filter(function (tag) {return tag["community_id"] === 0}).map(function(tag){
        return {text: tag["token"], value: tag[metric].toFixed(4)}
    })
    var words1 = tags.filter(function (tag) {return tag["community_id"] === 1}).map(function(tag){
        return {text: tag["token"], value: tag[metric].toFixed(4)}
    })

    return (
        <Container fluid>
            {/* <h4 className='m-5 app-center'>Top Hashtags in Bot Tweets</h4> */}

            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            {/*
                            <Card.Text className="app-center">
                                Top Hashtags in Left-leaning Bot Tweets
                            </Card.Text>
                            */}

                            <div style={{ width: "100%", height: "100%"}}>
                                <ReactWordcloud options={options0} words={words0}/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            {/*
                            <Card.Text className="app-center">
                                Top Hashtags in Right-leaning Bot Tweets
                            </Card.Text>
                            */}

                            <div style={{ width: "100%", height: "100%"}}>
                                <ReactWordcloud options={options1} words={words1}/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
