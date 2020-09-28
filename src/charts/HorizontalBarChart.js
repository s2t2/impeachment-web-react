import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Label
} from 'recharts';

const data = [
    { "community_id": 1, "retweet_count": 9223, "retweeted_user_screen_name": "REALDONALDTRUMP", "retweeter_count": 110 },
    { "community_id": 1, "retweet_count": 3602, "retweeted_user_screen_name": "CHARLIEKIRK11", "retweeter_count": 104 },
    { "community_id": 1, "retweet_count": 2194, "retweeted_user_screen_name": "MARKLEVINSHOW", "retweeter_count": 105 },
    { "community_id": 1, "retweet_count": 2137, "retweeted_user_screen_name": "DBONGINO", "retweeter_count": 102 },
    { "community_id": 1, "retweet_count": 1454, "retweeted_user_screen_name": "RUDYGIULIANI", "retweeter_count": 107 },
    { "community_id": 0, "retweet_count": 27236, "retweeted_user_screen_name": "TRIBELAW", "retweeter_count": 567 },
    { "community_id": 0, "retweet_count": 19708, "retweeted_user_screen_name": "JOYCEWHITEVANCE", "retweeter_count": 563 },
    { "community_id": 0, "retweet_count": 16831, "retweeted_user_screen_name": "KYLEGRIFFIN1", "retweeter_count": 563 },
    { "community_id": 0, "retweet_count": 11871, "retweeted_user_screen_name": "NEAL_KATYAL", "retweeter_count": 560 },
    { "community_id": 0, "retweet_count": 5824, "retweeted_user_screen_name": "REPADAMSCHIFF", "retweeter_count": 567 }
];

// sorting data


data.sort(function (b, a) {
    return a.retweet_count - b.retweet_count;
});






export default class Example extends PureComponent {

    render() {
        return (
            
                <BarChart
                    width={900}
                    height={600}
                    data={data}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                    <XAxis type="number" dataKey="retweet_count" />
                    <YAxis type="category" dataKey="retweeted_user_screen_name" />
                    <CartesianGrid strokeDasharray="1 1" />
                    <Tooltip />
                    <Legend />
                <Bar dataKey="retweet_count" fill="#0f419a" />
                
                

                </BarChart>
        
        );
    }
}
