
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import NetworkGraph from "./Graph"
import TreeGraph from "./Graph1"

export default function BotNetworks() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Networks</h3></Card.Title>

                    <Card.Text>
                        Bot Community Networks:
                    </Card.Text>
                    <NetworkGraph/>

                    <Card.Text>
                        Prototype tree graph structure with levels:
                    </Card.Text>
                    <TreeGraph/>
                </Card.Body>
            </Card>
        </Container>
    )
}
