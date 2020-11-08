
import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

//import {formatNumber, bigNumberLabel} from "../../Utils/Decorators"

const HashtagsBarChart = function(props){
    const {data, barFill, metric, tickFormatter} = props
    console.log("DATA", data, "FILL", barFill)

    var chartContainerStyle = { width: "100%", height: 500}
    var chartMargins = {top: 5, right: 30, left: 150, bottom: 5}

    return (
        <div style={chartContainerStyle}>
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical" margin={chartMargins}>
                    <XAxis type="number" dataKey={metric} tickFormatter={tickFormatter}
                    />
                    <YAxis type="category" dataKey="tag" />
                    <CartesianGrid strokeDasharray="1 1"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey={metric} fill={barFill}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default HashtagsBarChart
