
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

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

                    <DailyShift/>

                    {/*
                    <Card.Text>
                        For each day in our <a href="/collection-timeline">primary tweet collection period</a>,
                        {" "} we used our <a href="/opinion-models">Impeachment opinion model</a>
                        {" "} to calculate the average opinion scores for all users, with vs. without <a href="/bot-classification">bots</a>,
                        {" "} to assess the impact the bots were having on the conversation.
                    </Card.Text>
                    */}

                    <Card.Text>
                        The chart above shows the daily bot-induced shift in opinions about the Impeachment of President Donald Trump.
                        {" "}The shift in mean opinion is affected by bot reach, <a href="/bot-activity">bot activity</a> levels, and <a href="/bot-beneficiaries">bot opinions</a>.
                        {" "}Baseline opinions are measured using our <a href="/opinion-models">Impeachment opinion model</a>, which is based on a BERT transformer sentiment classifier.
                    </Card.Text>


                    <Card.Text>
                        {" "} We observe the average daily bot-induced opinion shift is 3.5% towards left-leaning opinions.
                        {" "} The highest daily shift towards right-leaning bot opinions was 6.7% on 12/29,
                        {" "} and the highest daily shift towards left-leaning bot opinions was 13% on 1/30.
                    </Card.Text>

                    {/*
                    <img src={dailyShift} alt="a bar graph of daily opinion shift by bot community" style={{marginTop:20, marginBottom:20}} className="img-fluid"/>
                    */}

                </Card.Body>
            </Card>
        </Container>
    )
}
