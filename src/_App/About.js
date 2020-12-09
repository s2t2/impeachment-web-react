
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import AboutCard from './About/Card'
import MethodologyCard from './Methodology/Card'

export default function About() {

    return (
        <Container fluid>
            <AboutCard/>

            {/* <MethodologyCard/> */}

            <Card>
                <Card.Body>
                    <Card.Title><h3>Team</h3></Card.Title>

                    <ul>
                        <li><a href="https://www.zlisto.com/">Prof. Tauhid Zaman</a> (Yale University)</li>
                        <li><a href="https://prof-rossetti.herokuapp.com/">Michael J Rossetti</a> (Georgetown University, New York University)</li>
                        <li>Special thanks to <a href="https://scholar.google.com/citations?hl=en&user=Xw7yaiUAAAAJ">Mohammad Samiul Islam</a> for website development support!</li>
                    </ul>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Source Code</h3></Card.Title>

                    <Card.Text>A non-comprehensive list:</Card.Text>
                    <ul>
                        <li><a href="https://github.com/zaman-lab/tweet-analyzer-py/blob/master/start">Tweet Collection and Analysis (Colab Notebooks)</a></li>
                        <li><a href="https://github.com/zaman-lab/tweet-analyzer-py">Tweet Collection and Analysis (Python Scripts)</a></li>
                        <li><a href="https://github.com/zaman-lab/tweet-analyzer-py/blob/master/api">Tweet Analysis API (Flask)</a></li>
                        <li><a href="https://github.com/zaman-lab/impeachment-web-react">Tweet Analysis Website (React)</a></li>
                    </ul>

                </Card.Body>
            </Card>

        </Container>
    )
}
