
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import communityRetweetsOverTime from "../Activity/daily-rts-by-community.png"
//import dailyEquilibrium from "./daily-opinion-equilibrium-tableau.png"
//import dailyShift from "./daily-opinion-shift-tableau.png"
import DailyShift from "./DailyShift"

export default function BotImpact() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Impact</h3></Card.Title>

                    <h4>Opinion Shift</h4>
                    <Card.Text>
                        For each day in our <a href="/collection-timeline">primary tweet collection period</a>,
                        {" "} we used our BERT Transformer <a href="/opinion-models">opinion model</a>
                        {" "} to calculate the average opinion scores for all users, with vs. without bots, to assess the impact the bots were having on the conversation.
                        {" "} We observe the average daily bot-induced opinion shift is 1.4% towards left-leaning opinions.
                        {" "} The chart below shows the shift in opinion scores by day.
                        {" "} The highest daily shift towards right-leaning bot opinions was 2.8% on 12/28, and the highest daily shift towards left-leaning bot opinions was 6.3% on 1/8.
                    </Card.Text>
                    {/*
                    <img src={dailyShift} alt="a bar graph of daily opinion shift by bot community" style={{marginTop:20, marginBottom:20}} className="img-fluid"/>
                    */}
                    <DailyShift/>



                    <h4>Retweet Volume</h4>
                    <Card.Text>
                        In general, left-leaning bots outnumber right-leaning bots 571 to 110, and generate a greater volume of tweets than right-leaning bots.
                    </Card.Text>
                    <img src={communityRetweetsOverTime} alt="a histogram depicting bot probabilities" style={{marginTop:20, marginBottom:20}} className="img-fluid"/>


                </Card.Body>
            </Card>
        </Container>
    )
}
