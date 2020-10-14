
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import ProfileHashtags from "./ProfileHashtags" // "../../_Dashboards/TopProfileTags/Dashboard"
import StatusHashtags from "./StatusHashtags" // "../../_Dashboards/TopStatusTags/Dashboard"

export default function BotCommunityLanguage() {

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Community Language</h3></Card.Title>
                    <Card.Text>
                        We analyzed the language patterns exhibited by each bot community, to determine which terms and hashtags appeared most frequently in tweets by members of that community. We also analyzed which terms and hashtags appeared most frequently in bot profiles. The results are below.
                    </Card.Text>

                    <StatusHashtags/>

                    <ProfileHashtags/>

                    <Card.Text>
                        NOTE: the hashtags <i>'#QAnon'</i>, <i>'#WWG1WGA'</i>, and <i>'#GreatAwakening'</i> are related to the <a href="https://www.cbsnews.com/news/what-is-the-qanon-conspiracy-theory/">"Q-Anon" conspiracy theory</a>.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
