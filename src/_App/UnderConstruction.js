import React from "react"
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function UnderConstruction(){
    return (
        <Container fluid>
            <Card>
                <Card.Title>Under Construction...</Card.Title>

                <Card.Text>
                    There was some content here, and it will be back soon.
                </Card.Text>
            </Card>

        </Container>
    )
}
