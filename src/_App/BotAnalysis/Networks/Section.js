
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

//import botCommunityAssignments from "./community-assignments.png" // TODO
import BotNetworksHistogram from "./Chart" // TODO

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
                        {" "} The first cluster (Network 0) yielded 571 bots, while the second cluster (Network 1) yielded 110 bots.
                    </Card.Text>

                    <BotNetworksHistogram/>

                    <Card.Text>
                      Only after examining the retweet beneficiaries
                        {" "} and language patterns
                        {" "} of each bot network would we observe
                        {" "} Network 0 represents anti-Trump bots, and
                        {" "} Network 1 represents pro-Trump bots.
                        {" "} We would later train our <a href="/opinion-models">Impeachment opinion models</a> based on hashtags used by each of these bot retweet networks.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
