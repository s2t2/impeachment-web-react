
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import botCommunityAssignments from "../../_Dashboards/About/community-assignments.png"

export default function BotCommunities() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Bot Community Clustering</h2></Card.Title>
                    <Card.Text>
                        <p>
                            After identifying the bots, we re-examined their retweet behavior to discern who they were retweeting, and how often. Then for each pair of bots, we compared this data to produce a <a href="https://deepai.org/machine-learning-glossary-and-terms/jaccard-index">Jaccard coefficient</a> (similarity score) between each bot pair.
                        </p>
                        <p>
                            Based on how similar each bot's retweet behavior was to each other bot, we grouped the bots into a given number of like communities, using a <a href="https://en.wikipedia.org/wiki/Spectral_clustering">Spectral Clustering</a> method (similar to K-Means Clustering). We chose to separate the bots into two communities, to model the partisan nature of US politics.
                        </p>
                        <p>
                            Overall, 681 bots had similarity scores appropriate for assignment in one of these two communities. The first community ("Community 0") includes 571 bots, while the second community ("Community 1") includes 110 bots.
                        </p>
                        <img src={botCommunityAssignments} alt="a chart depicting the number of bots in each community" class="img-fluid"/>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
