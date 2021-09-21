
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import AboutCard from './About/Card'
//import MethodologyCard from './Methodology/Card'

export default function About() {

    return (
        <Container fluid>
            <AboutCard/>

            {/* <MethodologyCard/> */}

            <Card>
                <Card.Body>
                    <Card.Title><h3>Team</h3></Card.Title>

                    <ul>
                        <li><a href="https://www.zlisto.com/">Tauhid Zaman</a> (Yale University)</li>
                        <li><a href="https://prof-rossetti.herokuapp.com/">Michael Rossetti</a> (Georgetown University, New York University)</li>
                        <li>Special thanks to <a href="https://scholar.google.com/citations?hl=en&user=Xw7yaiUAAAAJ">Mohammad Samiul Islam</a> for website development support!</li>
                    </ul>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Source Code</h3></Card.Title>

                    <ul>
                        <li><a href="https://github.com/s2t2/tweet-analysis-2020">Impeachment 2020 Data Collection</a></li>
                        <li><a href="https://github.com/s2t2/tweet-analysis-2020/blob/main/api/docs/endpoints-v1.md">Impeachment 2020 API Docs</a></li>
                        <li><a href="https://github.com/s2t2/impeachment-web-react">Impeachment 2020 Website</a></li>
                    </ul>

                </Card.Body>
            </Card>

        </Container>
    )
}
