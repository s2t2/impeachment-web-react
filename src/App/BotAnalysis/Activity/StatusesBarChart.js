//import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

//const BarLabel = function(props) {
//    const {x, y, value} = props
//    return (
//        <text x={x} y={y} dx="1%" dy="4%" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="left">
//            {value}
//        </text>
//    )
//}

//const StatusesBarChart = function(props){
//    const {data, barFill} = props
//    console.log("DATA", data, "FILL", barFill)
//
//    var chartContainerStyle = { width: '100%', height: 500}
//    var chartMargin = {top: 5,left: 10, bottom: 5}
//
//    return (
//        <div style={chartContainerStyle}>
//            <ResponsiveContainer>
//
//                <BarChart data={data} layout="vertical" margin={chartMargin}>
//                    <XAxis type="number" dataKey="retweet_count"/>
//                    <YAxis type="category" dataKey="status_text" width={525} tick={{fontSize: 14}}/>
//                    <CartesianGrid strokeDasharray="1 1"/>
//                    <Tooltip
//                        labelFormatter={() => undefined}
//                        formatter={(okay) => [new Intl.NumberFormat('en').format(okay), undefined]}
//                    />
//                    <Legend/>
//                    <Bar dataKey="retweet_count" fill={barFill} label={<BarLabel/>}/>
//                </BarChart>
//            </ResponsiveContainer>
//        </div>
//    )
//}
