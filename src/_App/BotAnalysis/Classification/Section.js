
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import {formatNumber, formatPct} from '../../Utils/Decorators'
import bots from './data.js'
import exampleDailyBotProbabilities from '../../../_Dashboards/About/bot_probabilities_histogram_20200201.png' // TODO

export default function BotClassificationSection() {

    const botRows = bots.slice(0,10).map(function(bot){
        return (
            <tr key={bot["screen_name"]}>
                <td><a href={`http://twitter.com/${bot["screen_name"]}`}>@{bot["screen_name"]}</a> </td>
                <td>{formatNumber(bot["rt_count"])}</td>
                <td>{formatNumber(bot["status_count"])}</td>
                <td>{formatPct(bot["rt_pct"])}</td>
            </tr>
        )
    })

    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Bot Classification</h3></Card.Title>

                    <h4 id="bot-behaviors">Bot Behaviors</h4>
                    <Card.Text>
                        The <a href="/about">previous bot detection research</a> suggests bots exhibit the primary behavior of retweeting humans at high frequencies.
                    </Card.Text>

                    <h4 id="retweet-analysis">Retweet Analysis</h4>
                    <Card.Text>
                        We examined the retweets for each day in our <a href="/collection-timeline">collection period</a> to identify which users retweeted with sufficient frequency to differentiate them from humans. Based on these retweet frequencies, our bot classification model assigned each retweeter a "daily bot probability score" from <code>0</code> (not bot) to <code>1</code> (bot). An example distribution of daily bot probability scores is below.
                    </Card.Text>

                    <img src={exampleDailyBotProbabilities} alt="a histogram depicting bot probabilities" className="img-fluid"/>

                    <h4 id="classification-results">Classification Results</h4>
                    <Card.Text>
                        After assigning daily bot probability scores for all users, we identified which users had at least one daily probability greater than 80%, and labeled these users as bots. In total, this method yielded 24,150 bots, which represents 0.67% of the total users and 0.87% of the total retweeters in our dataset.
                    </Card.Text>

                    <Card.Text>
                        Despite only representing less than 1% of all users, these bots were responsible for 20.9 million tweets (31% of the total tweets) and 20.1 million retweets (36% of the total tweets) in our dataset.
                    </Card.Text>

                    <h4 id="most-active-bots">Most Active Bots</h4>
                    <Card.Text>
                        The table below presents the top ten most active bots in our dataset.
                    </Card.Text>

                     <div className="table-responsive">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th scope="col">Bot Screen Name</th>
                                    <th scope="col">Retweet Count</th>
                                    <th scope="col">Tweet Count</th>
                                    <th scope="col">Retweet Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {botRows}
                            </tbody>
                        </Table>
                    </div>

                    <Card.Text>
                        NOTE: some of these accounts have since been deleted or suspended by Twitter.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
