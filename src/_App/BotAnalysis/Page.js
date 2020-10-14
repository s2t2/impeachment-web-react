
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

// TODO: pass the sidebar object from the app.js to assemble the nav links

export default function BotAnalysisPage() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>II. Bot Analysis</h2></Card.Title>

                    <Card.Text>
                        <ul>
                            <li><a href="/bot-classification">Bot Classification</a></li>
                            <li><a href="/bot-community-clustering">Bot Community Clustering</a></li>
                            <li><a href="/bot-community-activity">Bot Community Activity Analysis</a></li>
                            <li><a href="/bot-community-language">Bot Community Language Analysis</a></li>
                            <li><a href="/bot-impact">Bot Impact Analysis</a></li>
                        </ul>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
