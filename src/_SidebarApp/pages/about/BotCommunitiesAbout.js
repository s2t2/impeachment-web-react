import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import CustomLoader from "./CustomLoader"


import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    {
        "user_count": 571,
        "community_id": 0
    },

    {
        "user_count": 0,
        "community_id": 0.2
    },
    {
        "user_count": 0,
        "community_id": 0.4
    },
    {
        "user_count": 0,
        "community_id": 0.6
    },
    {
        "user_count": 0,
        "community_id": 0.8
    },
    {
        "user_count": 110,
        "community_id": 1
    },
    
];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (

            <Container fluid>
                
                <Row>
                    
                    <Col sm={12} md={12} lg={12}>
                        
                        <Card>
                            
                            <Card.Body>
                                <Card.Text className="app-center">

                                    Bot Communities Histogram

                                </Card.Text>
                            </Card.Body>
                            
                            <div class="offset-3">
                            
                                    <div
                                        style={{
                                            width: '60%',
                                            height: 500,

                                        }}>
                                        <ResponsiveContainer>
                                            <BarChart
                                                width={500}
                                                height={300}
                                                data={data}
                                                margin={{
                                                    top: 5, right: 30, left: 20, bottom: 5,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="category" dataKey="community_id" />
                                            <YAxis type="number" dataKey="user_count" />
                                                <Tooltip />
                                                <Legend   />
                                            <Bar dataKey="user_count" fill="#00276c" />
                                    
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                
                            </div>

                          

                            
                        </Card>
                    </Col>
                </Row>
            </Container>
           
        );
    }
}
