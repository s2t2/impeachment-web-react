import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="community_id" />
                <YAxis dataKey="user_count" />
                <Tooltip />
                <Legend />
                <Bar dataKey="user_count" fill="#8884d8" />
            </BarChart>
        );
    }
}
