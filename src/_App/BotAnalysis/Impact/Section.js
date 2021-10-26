
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

//import dailyEquilibrium from "./daily-opinion-equilibrium-tableau.png"
//import dailyShift from "./daily-opinion-shift-tableau.png"
import DailyShift from "./DailyShift"
import DailyActivity from "./DailyActivity"

export default function BotImpact() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Impact</h3></Card.Title>

                    <h4 id="opinion-shift">Opinion Shift</h4>
                    {/*
                    <img src={dailyShift} alt="a bar graph of daily opinion shift by bot community" style={{marginTop:20, marginBottom:20}} className="img-fluid"/>
                    */}
                    <DailyShift/>

                    <Card.Text>
                        The chart above shows the daily bot-induced shift in opinions about the Impeachment of President Donald Trump.
                        {" "}The shift in mean opinion is affected by bot reach, bot activity levels, and <a href="/bot-opinions">bot opinions</a>.
                        {" "}Baseline opinions are measured using our <a href="/opinion-models">Impeachment opinion model</a>, which is based on a BERT transformer sentiment classifier.
                        {" "}Scores are calculated according to a network centrality algorithm called General Harmonic Influence Centrality (GHIC).
                        {" "}Positive scores (red bars) indicate a shift toward Pro-Trump opinions, while negative scores (blue bars) indicate a shift toward Anti-Trump opinions.
                    </Card.Text>


                    <Card.Text>
                        {" "} We observe the average daily bot-induced opinion shift (GHIC score) is 0.0025 towards pro-Trump opinions.
                        {" "} The highest daily shift towards pro-Trump opinions was 0.0066 on 1/13.
                        {" "} and the highest daily shift towards anti-Trump opinions was 0.00088 on 12/23.
                    </Card.Text>


                </Card.Body>
            </Card>
        </Container>
    )
}
