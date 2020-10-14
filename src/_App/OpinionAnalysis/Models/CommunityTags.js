

import React from 'react'

import CommunityTagsTable from '.CommunityTagsTable'

export default function CommunityTags(props) {

        var community0 = orderBy(users.filter(function (u) {return u["community_id"] === 0}), metric, "desc")
        var community1 = orderBy(users.filter(function (u) {return u["community_id"] === 1}), metric, "desc")

        spinIntoCharts = <span>
            <h4 className='app-center'>Statuses Most Retweeted by Bot Community</h4>

            <Row>
                <Col sm={12} md={12} lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text className="app-center">
                                Statuses Most Retweeted by Left-leaning Bots
                            </Card.Text>

                            {/* <StatusesBarChart data={community0} barFill="#002868"/> */}

                            <StatusesMostRetweetedTable data={community0}/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={12} lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text className="app-center">
                                Statuses Most Retweeted by Right-leaning Bots
                            </Card.Text>

                            {/* <StatusesBarChart data={community1} barFill="#bf0a30"/> */}
                            <StatusesMostRetweetedTable data={community1}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </span>
    }

    return (
        <Container fluid>
            {spinIntoCharts}
        </Container>
    )
}
