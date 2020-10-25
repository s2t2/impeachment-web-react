

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
                    For this project, we analyzed tweets about the Trump Impeachment proceedings, with the aim of identifying automated Twitter accounts known as "bots," analyzing their behaviors, and assessing their impact on the conversation.
                    {" "}We then use bot community language patterns to train opinion models to measure media bias on Twitter.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
