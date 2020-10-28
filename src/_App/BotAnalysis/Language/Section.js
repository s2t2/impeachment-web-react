
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import ProfileHashtags from "./ProfileHashtags"
import StatusHashtags from "./StatusHashtags"
//import ProfileHashtagWordClouds from "./ProfileHashtagWordClouds"
//import StatusHashtagWordClouds from "./StatusHashtagWordClouds"

export default function BotLanguageSection() {

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Language</h3></Card.Title>

                    <h4>Top Hashtags in Bot Tweets</h4>
                    <Card.Text>
                        We analyzed the language patterns exhibited by each <a href="/bot-communities">bot community</a>,
                        {" "}to determine which terms and hashtags appeared most frequently in tweets by members of that community.
                    </Card.Text>
                    <Card.Text>
                        It is interesting to observe Pro-Trump bots using hashtags like <i>'#QANON'</i>, <i>'#WWG1WGA'</i>, and <i>'#GREATAWAKENING'</i>,
                        {" "} which are related to the <a href="https://www.cbsnews.com/news/what-is-the-qanon-conspiracy-theory/">"Q-Anon" conspiracy theory</a>.
                    </Card.Text>

                    <StatusHashtags/>
                    {/* <StatusHashtagWordClouds/> */}

                    <h4>Top Hashtags in Bot Profiles</h4>
                    <Card.Text>
                        We also analyzed which hashtags appeared most frequently in bot profiles. The results are below.
                    </Card.Text>
                    <ProfileHashtags/>
                    {/* <ProfileHashtagWordClouds/> */}

                </Card.Body>
            </Card>
        </Container>
    )
}
