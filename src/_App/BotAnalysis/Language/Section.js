
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



                    <Card.Text>
                        The charts below show the top hashtags used in tweets and profiles by members of each <a href="/bot-opinions">bot opinion community</a>.

                    {/*
                        We analyzed the language patterns exhibited by each bot opinion community,
                        {" "}to determine which terms and hashtags appeared most frequently in that community's tweets and user profiles.


                        {" "} It is interesting to observe pro-Trump bots using hashtags like <i>'#QANON'</i>, <i>'#WWG1WGA'</i>, and <i>'#GREATAWAKENING'</i>,
                        {" "} which are <a href="https://wt.social/post/fighting-misinformation/nvrqyhu5325591624484">related</a>
                        {" "} to the debunked <a href="https://www.cbsnews.com/news/what-is-the-qanon-conspiracy-theory/">"Q-Anon" conspiracy theory</a>.
                    */}
                    </Card.Text>

                    <h4>Top Hashtags in Bot Tweets</h4>

                    {/*
                    */}
                    <StatusHashtags/>
                    {/* <StatusHashtagWordClouds/> */}

                    <h4>Top Hashtags in Bot Profiles</h4>

                    {/*
                    <Card.Text>
                        We also analyzed which hashtags appeared most frequently in bot profiles. The results are below.
                    </Card.Text>
                    */}

                    <ProfileHashtags/>
                    {/* <ProfileHashtagWordClouds/> */}


                    <Card.Text>
                        It is interesting to observe pro-Trump bots using hashtags like <i>'#QANON'</i>, <i>'#WWG1WGA'</i>, and <i>'#GREATAWAKENING'</i>,
                        {" "} which are <a href="https://wt.social/post/fighting-misinformation/nvrqyhu5325591624484">related</a>
                        {" "} to the baseless <a href="https://www.cbsnews.com/news/what-is-the-qanon-conspiracy-theory/">"Q-Anon" conspiracy theory</a>.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
