
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

export default function TweetCollectionSection() {
    var topics = [
        {"topic": "#FactsMatter", "date": "2019-12-17"},
        {"topic": "#IGHearing", "date": "2019-12-17"},
        {"topic": "#IGReport", "date": "2019-12-17"},
        {"topic": "#ImpeachAndConvict", "date": "2019-12-17"},
        {"topic": "#ImpeachAndConvictTrump", "date": "2019-12-17"},
        {"topic": "#SenateHearing", "date": "2019-12-17"},
        {"topic": "#TrumpImpeachment", "date": "2019-12-17"},
        {"topic": "impeach", "date": "2019-12-17"},
        {"topic": "impeached", "date": "2019-12-17"},
        {"topic": "impeachment", "date": "2019-12-17"},
        {"topic": "Trump to Pelosi", "date": "2019-12-17"},
        {"topic": "#25thAmendmentNow", "date": "2019-12-18"},
        {"topic": "#ImpeachAndRemove", "date": "2019-12-18"},
        {"topic": "#ImpeachmentEve", "date": "2019-12-18"},
        {"topic": "#ImpeachmentRally", "date": "2019-12-18"},
        {"topic": "#NotAboveTheLaw", "date": "2019-12-18"},
        {"topic": "#trumpletter", "date": "2019-12-18"},
        {"topic": "#GOPCoverup", "date": "2020-01-22"},
        {"topic": "#ShamTrial", "date": "2020-01-22"},
        {"topic": "#AquittedForever", "date": "2020-02-06"},
        {"topic": "#CountryOverParty", "date": "2020-02-06"},
        {"topic": "#CoverUpGOP", "date": "2020-02-06"},
        {"topic": "#MitchMcCoverup", "date": "2020-02-06"},
        {"topic": "#MoscowMitch", "date": "2020-02-06"}
    ]

    //var topicListItems = topics.map(function(topic){
    //    return <li>{topic["topic"]}</li>
    //})

    var topicRows = topics.map(function(topic){
        return (
            <tr>
                <td><i>{topic["topic"]}</i></td>
                <td>{topic["date"]}</td>
            </tr>
        )
    })

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Tweet Collection</h2></Card.Title>
                    <Card.Text>
                        <p>
                            Over X days, from 12/20/2019 to 03/24/2020, we collected tweets about the Trump Impeachment proceedings. Specifically, we collected any tweet mentioning any these impeachment-related topics:
                        </p>

                        {/*
                        <ul>
                            {topicListItems}
                        </ul>
                        */}

                        <div class="table-responsive">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Topic / Hashtag</th>
                                        <th scope="col">Date Added</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topicRows}
                                </tbody>
                            </Table>
                        </div>

                        <p>
                            In total, we collected 67.6 million tweets by 3.6 million unique users. Of these, 55.9 million (82.6%) were retweets, by 2.7 million unique users.
                        </p>
                        <p>
                            NOTE: despite running our collector continuously, we were not able to collect every single tweet about impeachment. This is due to Twitter API rate limits which caused our collector to sleep intermittently when it was being rate-limited.
                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>



            {/* TODO: bar graph of tweets per day */ }
            {/* TODO: bar graph of top retweeted users */ }
        </Container>
    )
}
