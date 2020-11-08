

import React from 'react'
import {orderBy} from 'lodash'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import CommunityTagsTable from './CommunityTagsTable'
import communityTags from  './data'

export default function CommunityTags() {

    var community0 = orderBy(communityTags.filter(function (u) {return u["community_id"] === 0}), "tag", "asc")
    var community1 = orderBy(communityTags.filter(function (u) {return u["community_id"] === 1}), "tag", "asc")

    return (
        <Container fluid>
            {/*
            <h5 className='app-center'>Bot Retweet Network Hashtags (for Sentiment Labeling)</h5>
            */}

            <Row>
                <Col sm={12} md={12} lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text className="app-center">
                                Anti-Trump Sentiment Hashtags
                            </Card.Text>

                            <CommunityTagsTable data={community0}/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={12} lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text className="app-center">
                                Pro-Trump Sentiment Hashtags
                            </Card.Text>

                            <CommunityTagsTable data={community1}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
