
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import CommunityTagsTable from './CommunityTagsTable'

export default function SentimentAnalysis() {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Opinion Models</h3></Card.Title>
                    <Card.Text>
                        For training our Impeachment opinion models, we used an automated approach suggested by the previous bot-detection research.
                        {" "}It starts with labeling users, then labeling their tweets, and using those labeled tweets for model training.
                    </Card.Text>

                    <h4>Labeling Users</h4>
                    <Card.Text>
                        We chose a mutually exclusive list of the <a href="/bot-community-language">top profile hashtags</a> for each bot community, removing shared topics like <i>'#Impeachment'</i>, which were used by both communities.
                        {" "} These community hashtags are listed below.
                    </Card.Text>
                    <CommunityTagsTable/>

                    <Card.Text>
                        We then identified the users in our dataset who included any of the community hashtags in their profile description.
                        {" "}We removed users who included tags from more than one community, and then assigned each of the remaining users a bot community label of <code>0</code> or <code>1</code>, depending on which community hashtags were present in their profile.
                        {" "}This resulted in a mutually exclusive list of users who represent each bot community.
                    </Card.Text>

                    <h4>Labeling Tweets</h4>
                    <Card.Text>
                        For each of these labeled users, we labeled all of their tweets with their respective community label (<code>0</code> or <code>1</code>).
                        {" "}Since some of these labeled tweets were retweets that share the same tweet text, we de-duplicated all tweet texts (to prevent over-fitting that can occur when a model scores a tweet that shares the same text as one it has been trained on).
                        {" "}This resulted in a list of unique tweet texts to use for model training.
                    </Card.Text>


                    <h4>Model Training</h4>
                    <Card.Text>
                        We chose to train three different opinion models and compare their results.
                        {" "}The first two were Logistic Regression and Naive Bayes binary classifier models which score tweets as a (<code>0</code> or <code>1</code>).
                        {" "}The third, a transfer learning model adapted from Google's BERT transformer, scores tweets using a decimal number in-between 0 and 1.
                    </Card.Text>

                    <Card.Text>
                        We used 80% of the labeled data to train the models, and the remaining 20% to score them. We split the data using stratified random sampling techniques, and ensured there was general parity between each label class.
                        {" "}A summary of the training data is below.
                    </Card.Text>

                    <h4>Model Evaluation</h4>
                    <Card.Text>
                        The results of model training are below.
                    </Card.Text>

                    <h4>Model Predictions</h4>
                    <Card.Text>
                        Coming Soon...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
