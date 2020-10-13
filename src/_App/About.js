
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function About() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>About</h2></Card.Title>
                    <Card.Text>
                       <p>
                        This project builds upon the research of Tauhid Zaman, Nicolas Guenon Des Mesnards, et. al., as described by the paper: <a href="https://arxiv.org/abs/1810.12398">"Detecting Bots and Assessing Their Impact in Social Networks"</a> (2018). For this project, we analyzed tweets about the Trump Impeachment proceedings, with the aim of identifying automated Twitter accounts known as "bots", analyzing their behaviors, and assessing their impact on the conversation.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Team</h3></Card.Title>
                    <Card.Text>
                        <ul>
                            <li><a href="https://www.zlisto.com/">Dr. Tauhid Zaman</a> (Yale University)</li>
                            <li><a href="http://data-creative.info/team/">Michael J Rossetti</a> (Georgetown University, New York University)</li>
                            <li>Special thanks to <a href="https://scholar.google.com/citations?hl=en&user=Xw7yaiUAAAAJ">Mohammad Samiul Islam</a> for front-end development and data visualization contributions!</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card>
                <Card.Body>
                    <Card.Title><h3>Source Code</h3></Card.Title>
                    <Card.Text>
                        <ul>
                            <li><a href="https://github.com/zaman-lab/tweet-analyzer-py/blob/master/start">Tweet Collection and Analysis (Colab Notebooks)</a></li>
                            <li><a href="https://github.com/zaman-lab/tweet-analyzer-py">Tweet Collection and Analysis (Python Scripts)</a></li>
                            <li><a href="https://github.com/zaman-lab/tweet-analyzer-py/blob/master/api">Tweet Analysis API (Flask)</a></li>
                            <li><a href="https://github.com/zaman-lab/impeachment-web-react">Tweet Analysis Website (React)</a></li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
