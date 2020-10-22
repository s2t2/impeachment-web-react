
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import timeline from './data'

export default function Section() {

    var timelineRows = timeline.map(function(event){
        return (
            <tr key={event["title"]}>
                <td>{event["title"]}</td>
                <td style={{"whiteSpace": "nowrap"}}>{event["date"]}</td>
            </tr>
        )
    })

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Collection Timeline</h3></Card.Title>

                    <Card.Text>
                        For over ninety days, from 12/12/2019 to 03/24/2020, we collected <a href="/collection-topics">tweets about the Trump Impeachment proceedings</a>. This time period does not cover the entire proceedings in the House of Representatives, but does include the entire Senate Trial, which took place from 01/15 to 02/05. Most of our analysis focuses on the sixty-day period between 12/20 and 02/20.
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
                </Card.Body>
            </Card>
        </Container>
    )
}
