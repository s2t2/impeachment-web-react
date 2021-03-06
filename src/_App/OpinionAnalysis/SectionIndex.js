
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import sidebar from '../sidebar'

const PAGE_KEY = "opinion-analysis"

export default function OpinionAnalysisPage() {

    var page = sidebar.filter(function(page){ return page["key"] === PAGE_KEY})[0]

    var listItems = page["sections"].map(function(section){
        return <li key={section["key"]}><a href={`/${section['key']}`}>{section["title"]}</a></li>
    })

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h2><a href={`/${page["key"]}`}>{page["title"]}</a></h2></Card.Title>

                    {/* <Card.Text>The sections below are presented in reverse-chronological order.</Card.Text> */}

                    <ul>
                        {listItems}
                    </ul>

                </Card.Body>
            </Card>
        </Container>
    )
}
