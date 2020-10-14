
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import HomePage from './OpinionAnalysis/TopUsers/Dashboard' // "./About.js" // "./Home.js"

export default function Home() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <HomePage/>
                </Card.Body>
            </Card>
        </Container>
    )
}
