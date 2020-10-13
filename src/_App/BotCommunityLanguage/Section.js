
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import TopProfileTags from "../../_Dashboards/TopProfileTags/Dashboard"
import TopStatusTags from "../../_Dashboards/TopStatusTags/Dashboard"

export default function BotCommunityLanguage() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Bot Community Language Analysis</h2></Card.Title>
                    <Card.Text>
                        <p>
                            We analyzed the language patterns exhibited by each bot community, to determine which terms and hashtags appeared most frequently in tweets by members of that community. The results are below.
                        </p>
                        <TopStatusTags/>

                        { /*
                        <p>
                            It is interesting to observe the right-leaning community using hashtags related to the <a href="https://www.cbsnews.com/news/what-is-the-qanon-conspiracy-theory/">"Q-Anon" conspiracy theory</a> (e.g. <i>#QAnon</i>, <i>#WWG1WGA</i>, <i>#GreatAwakening</i>, etc.).
                        </p>
                        */}

                        <p>
                            We also analyzed which terms and hashtags appeared most frequently in bot profiles. The results are below.
                        </p>
                        <TopProfileTags/>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
