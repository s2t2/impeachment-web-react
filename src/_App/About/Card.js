

import React from 'react'

import Card from 'react-bootstrap/Card'

export default function AboutCard(){
    return (
        <Card>
            <Card.Body>
                <Card.Title><h2>About</h2></Card.Title>
                <Card.Text>
                    This project builds upon the research of Tauhid Zaman, Nicolas Guenon Des Mesnards, et. al., as described by the paper: <a href="https://arxiv.org/abs/1810.12398">"Detecting Bots and Assessing Their Impact in Social Networks"</a> (2018).
                </Card.Text>

                <Card.Text>
                    We collect tweets about the (First) Trump Impeachment, identify automated accounts known as "bots", analyze their behavior, and assess their impact on the conversation.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
