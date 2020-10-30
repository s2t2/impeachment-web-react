
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import NetworkGraph from "./Graph"

export default function BotNetworks() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Networks</h3></Card.Title>

                    <NetworkGraph/>
                </Card.Body>
            </Card>
        </Container>
    )
}
