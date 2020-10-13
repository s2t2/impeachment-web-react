
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import TopUserOpinionsDashboard from './TopUserOpinion/Dashboard' // "./About.js" // "./Home.js"

export default function Home() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <TopUserOpinionsDashboard/>
                </Card.Body>
            </Card>
        </Container>
    )
}
