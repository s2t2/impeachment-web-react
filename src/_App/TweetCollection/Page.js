
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import {topics, timeline} from "./data"

import TweetsCollectedByDay from "./tweets-collected-by-day.png"

export default function TweetCollectionPage() {

    var timelineRows = timeline.map(function(event){
        return (
            <tr>
                <td>{event["title"]}</td>
                <td style={{"whiteSpace": "nowrap"}}>{event["date"]}</td>
            </tr>
        )
    })

    var topicRows = topics.map(function(topic){
        return (
            <tr>
                <td><i>{topic["topic"]}</i></td>
                <td style={{"whiteSpace": "nowrap"}}>{topic["date"]}</td>
            </tr>
        )
    })


    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>I. Tweet Collection</h2></Card.Title>

                    <h4>Timeline</h4>
                    <Card.Text>
                        For over ninety days, from 12/12/2019 to 03/24/2020, we collected tweets about the Trump Impeachment proceedings. This time period does not cover the entire proceedings in the House of Representatives, but does include the entire Senate Trial, which took place from 01/15 to 02/05. Most of our analysis focuses on the sixty-day period between 12/20 and 02/20.
                    </Card.Text>

                    <div className="table-responsive">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th scope="col">Event</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timelineRows}
                            </tbody>
                        </Table>
                    </div>

                    {/*
                    <ul>
                        {topicListItems}
                    </ul>
                    */}

                    <h4>Topics</h4>
                    <Card.Text>
                        Specifically, we collected all tweets mentioning any of the impeachment-related topics below. We periodically added new topics to reflect conversation trends about current events.
                    </Card.Text>
                    <div className="table-responsive">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Collection Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topicRows}
                            </tbody>
                        </Table>
                    </div>

                    <h4>Collection Results</h4>
                    <Card.Text>
                        In total, we collected 67.6 million tweets by 3.6 million unique users. Of these, 55.9 million (82.6%) were retweets, by 2.7 million unique users.
                    </Card.Text>

                    <img src={TweetsCollectedByDay} alt="an area chart of tweets collected by day" className="img-fluid" style={{marginBottom:20}}/>

                    <Card.Text>
                        NOTE: our collector was down for maintenance on 12/18 and 12/19.
                    </Card.Text>

                    <Card.Text>
                        NOTE: despite running our collector continuously, we were not able to collect every single tweet about impeachment. This is due to Twitter API rate limits which caused our collector to sleep intermittently when it was being rate-limited.
                    </Card.Text>

                </Card.Body>
            </Card>

            {/* TODO: bar graph of tweets per day */ }
            {/* TODO: bar graph of top retweeted users */ }
        </Container>
    )
}
