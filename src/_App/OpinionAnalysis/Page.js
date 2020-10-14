
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

export default function OpinionAnalysisPage() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>III. Opinion Analysis</h2></Card.Title>

                    <Card.Text>
                        <ul>
                            <li><a href="/model-training">Model Training and Evaluation</a></li>
                            <li><a href="/user-opinions">Bot Community Clustering</a></li>
                            <li><a href="/top-user-opinions">Bot Impact Analysis</a></li>
                        </ul>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
