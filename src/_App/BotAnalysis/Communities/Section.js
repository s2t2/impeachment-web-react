
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

//import botCommunityAssignments from "./community-assignments.png" // TODO
import CommunityAssignmentsChart from "./Chart" // TODO

export default function BotClustering() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Communities</h3></Card.Title>

                    <h4>Bot Similarity</h4>
                    <Card.Text>
                        After <a href="/bot-classification">identifying the bots</a>, we re-examined their retweet behavior to discern who they were retweeting, and how often. Then for each pair of bots, we compared their retweet beneficiaries to produce a <a href="https://deepai.org/machine-learning-glossary-and-terms/jaccard-index">Jaccard coefficient</a> (similarity score) between each bot pair.
                    </Card.Text>

                    <h4>Bot Clustering</h4>
                    <Card.Text>
                        Based on how similar each bot's retweet behavior was to each other bot, we grouped the bots into a given number of like communities, using a <a href="https://en.wikipedia.org/wiki/Spectral_clustering">Spectral Clustering</a> method (similar to K-Means Clustering). We chose to separate the bots into two communities, to model the bipartisan nature of US politics.
                    </Card.Text>

                    <h4>Clustering Results</h4>
                    <Card.Text>
                        Overall, 681 bots had similarity scores appropriate for assignment in one of these two communities. The first community (Community 0) includes 571 bots, while the second community (Community 1) includes 110 bots.
                    </Card.Text>
                    <CommunityAssignmentsChart/>
                    {/*
                    <img src={botCommunityAssignments} alt="a chart depicting the number of bots in each community" class="img-fluid"/>
                    */}

                    <Card.Text>
                        Only after examining the <a href="/bot-beneficiaries">beneficiaries</a>
                        {" "} and <a href="/bot-language">language patterns</a>
                        {" "} of each bot community do we observe
                        {" "} Community 0 represents Left-leaning (Pro-Impeachment) bots, and
                        {" "} Community 1 represents Right-leaning (Pro-Trump) bots.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
