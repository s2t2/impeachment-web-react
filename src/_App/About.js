
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import AboutCard from './About/Card'

export default function About() {

    return (
        <Container fluid>
            <AboutCard/>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Methodology</h3></Card.Title>

                    <Card.Text>
                        Read about our methodology in rough chronological order by following the outline below:
                    </Card.Text>

                    {/* todo: make this from the sidebar sitemap */}
                    <ol type="I">
                        <li>Tweet Collection
                            <ol>
                                <li><a href="/collection-timeline">Collection Timeline</a></li>
                                <li><a href="/collection-topics">Collection Topics</a></li>
                                <li><a href="/collection-results">Collection Results</a></li>
                            </ol>
                        </li>

                        <li>Bot Analysis
                            <ol>
                                <li><a href="/bot-detection">Bot Detection</a></li>
                                <li><a href="/bot-networks">Bot Networks</a></li>
                                <li><a href="/bot-activity">Bot Activity</a></li>
                                <li><a href="/bot-beneficiaries">Bot Beneficiaries</a></li>
                                <li><a href="/bot-language">Bot Language</a></li>
                                <li><a href="/bot-impact">Bot Impact</a></li>
                            </ol>
                        </li>


                        <li>Opinion Analysis
                            <ol>
                                <li><a href="/opinion-models">Opinion Models</a></li>
                                <li><a href="/user-opinions">User Opinions</a></li>
                                <li><a href="/top-user-opinions">Top User Opinions</a></li>
                            </ol>
                        </li>
                    </ol>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Team</h3></Card.Title>

                    <ul>
                        <li><a href="https://www.zlisto.com/">Prof. Tauhid Zaman</a> (Yale University)</li>
                        <li><a href="https://prof-rossetti.herokuapp.com/">Michael Rossetti</a> (Georgetown University, New York University)</li>
                        <li>Special thanks to <a href="https://scholar.google.com/citations?hl=en&user=Xw7yaiUAAAAJ">Mohammad Samiul Islam</a> for front-end development and data visualization contributions!</li>
                    </ul>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Source Code</h3></Card.Title>

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
