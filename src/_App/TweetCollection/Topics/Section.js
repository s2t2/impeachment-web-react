
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import topics from './data'

export default function Section() {

    var topicRows = topics.map(function(topic){
        return (
            <tr>
                <td><i>{topic["topic"]}</i></td>
                <td style={{"whiteSpace": "nowrap"}}>{topic["date"]}</td>
            </tr>
        )
    })

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Collection Topics</h3></Card.Title>

                    <Card.Text>
                        We collected any tweets mentioning any of the impeachment-related topics below. We periodically added new topics to reflect conversation trends about current events.
                    </Card.Text>

                    {/*
                    <ul>
                        {topicListItems}
                    </ul>
                    */}

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
                </Card.Body>
            </Card>
        </Container>
    )
}
