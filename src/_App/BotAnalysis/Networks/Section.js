
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

//import botCommunityAssignments from "./community-assignments.png" // TODO
//import BotNetworksHistogram from "./Chart" // TODO
import CommunityTags from "../../OpinionAnalysis/Models/CommunityTags"

export default function BotNetworks() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Retweet Communities</h3></Card.Title>

                    <h4>Bot Similarity</h4>
                    <Card.Text>
                        After <a href="/bot-detection">identifying the bots</a>, we re-examined their retweet behavior to discern who they were retweeting, and how often.
                        {" "}Then for each pair of bots, we compared their retweet beneficiaries to produce a <a href="https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.link_prediction.jaccard_coefficient.html">Jaccard coefficient</a> (similarity score) between each bot pair.
                    </Card.Text>

                    <h4>Bot Clustering</h4>
                    <Card.Text>
                        We filtered out bots whose retweet behavior wasn't similar to any others,
                        {" "} and grouped the remaining 681 bots into a given number of clusters, using a <a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html">Spectral Clustering</a> method (similar to K-Means Clustering).
                        {" "} We chose to separate the bots into two clusters, to reflect the bipartisan nature of US politics.
                        {" "} The first cluster (Community 0) yielded 571 bots, while the second cluster (Community 1) yielded 110 bots.
                    {/*
                    </Card.Text>

                    <BotNetworksHistogram/>

                    <Card.Text>
                    */}
                        {" "} Based on the retweet beneficiaries
                        {" "} and language patterns
                        {" "} of each bot retweet network, we observe
                        {" "} Community 0 represents anti-Trump bots, and
                        {" "} Community 1 represents pro-Trump bots.
                    </Card.Text>


                    <h4 id="labeling-users">Impeachment Sentiment Hashtags</h4>
                    <Card.Text>
                        We identified the top hashtags used by each of these bot retweet communities,

                        {" "} then removed shared topics like <i>'#Impeachment'</i> and <i>'#FactsMatter'</i>, which were used by both networks.
                        {" "} The remaining sentiment hashtags are presented and described below.
                    </Card.Text>
                    <CommunityTags/>

                    <Card.Text>
                        We would later train our <a href="/opinion-models">Impeachment opinion models</a> using these hashtags.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
