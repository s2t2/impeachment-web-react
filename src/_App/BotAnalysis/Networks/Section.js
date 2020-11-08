
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

//import botCommunityAssignments from "./community-assignments.png" // TODO
import CommunityAssignmentsChart from "./Chart" // TODO

export default function BotNetworks() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Networks</h3></Card.Title>

                    <h4>Bot Similarity</h4>
                    <Card.Text>
                        After <a href="/bot-detection">identifying the bots</a>, we re-examined their retweet behavior to discern who they were retweeting, and how often.
                        {" "}Then for each pair of bots, we compared their retweet beneficiaries to produce a <a href="https://deepai.org/machine-learning-glossary-and-terms/jaccard-index">Jaccard coefficient</a> (similarity score) between each bot pair.
                    </Card.Text>

                    <h4>Bot Clustering</h4>
                    <Card.Text>
                        We filtered out bots whose retweet behavior wasn't significantly similar to any others,
                        {" "} and grouped the remaining 681 bots into a given number of clusters, using a <a href="https://en.wikipedia.org/wiki/Spectral_clustering">Spectral Clustering</a> method (similar to K-Means Clustering).
                        {" "} We chose to separate the bots into two clusters, to reflect the bipartisan nature of US politics.
                    </Card.Text>

                    <h4>Clustering Results</h4>
                    <Card.Text>
                        The first cluster (Network 0) includes 571 bots, while the second cluster (Network 1) includes 110 bots.
                    </Card.Text>
                    <CommunityAssignmentsChart/>
                    {/*
                    <img src={botCommunityAssignments} alt="a chart depicting the number of bots in each community" class="img-fluid"/>
                    */}

                    <Card.Text>
                        NOTE: only after examining the beneficiaries
                        {" "} and language patterns
                        {" "} of these bot networks do we observe
                        {" "} Network 0 represents left-leaning (anti-Trump) bots, and
                        {" "} Network 1 represents right-leaning (pro-Trump) bots.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
