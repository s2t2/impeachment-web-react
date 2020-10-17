
import React from 'react'
import {VictoryChart, VictoryBar, VictoryAxis, VictoryLegend, VictoryLabel} from 'victory'
import {scaleSequential, interpolateRdBu} from 'd3'

import './NewDashboard.css'

const colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

function formatBigNumber(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
} // adds "K" for thousands h/t: https://stackoverflow.com/a/9461657

const ALL_CATEGORIES = ["ELECTED-OFFICIAL", "PARTY", "GOVERNMENT", "MAJOR-MEDIA-OUTLET", "MEDIA-OUTLET"]
const BAR_COUNT = 10 // would be nice to get 15 or 20 to work (with smaller bar labels)
const MODEL_LABELS = {"avg_score_lr": "Logistic Regression", "avg_score_nb": "Naive Bayes", "avg_score_bert": "BERT Transformer"}
const METRIC_LABELS = {
    "follower_count": "Follower Count",
    "status_count": "Tweet Count",
    "avg_score_lr": "Opinion Score (Logistic Regression)",
    "avg_score_nb": "Opinion Score (Naive Bayes)",
    "avg_score_bert": "Opinion Score (BERT Transformer)"
}

export default function NewChart(props) {

    // CHART OPTIONS

    var metric = props["metric"] || "follower_count"
    var sortOrder = props["sortOrder"] || "DESC" // "ASC" // "DESC"
    var opinionMetric = props["opinionMetric"] || "avg_score_lr" // "avg_score_lr" // "avg_score_nb" // "avg_score_bert"
    var opinionMin = parseInt(props["opinionMin"]) || 0 // must be between 0 and 99 (and > opinionMax)
    var opinionMax = parseInt(props["opinionMax"]) || 100 // must be between 1 and 100 (and < opinionMin)
    var tweetMin = parseInt(props["tweetMin"]) || 5 // must be between 3 and 200
    var categories = props["categories"] || ALL_CATEGORIES

    // CHART DATA

    var slice = {"ASC": BAR_COUNT, "DESC": -BAR_COUNT}[sortOrder] // negative number takes last X users (which is actually the top X users)

    var users = props["users"]
        .filter(function(user){
            return (user["status_count"] >= tweetMin
                && user[opinionMetric] * 100.0 >= opinionMin
                && user[opinionMetric] * 100.0 <= opinionMax
                && categories.includes(user["category"])
        )})
        .map(function(user){
            user["handle"] = `@${user['screen_name']}`
            user["scorePct"] = (user[opinionMetric] * 100.0).toFixed(1) + "%"
            return user
        })
        .sort(function(a, b){
            return a[metric] - b[metric] // chart wants this order
        }) // sort before slice
        .slice(slice)

    //
    // CHART FORMATTING
    //

    var opinionModel = MODEL_LABELS[opinionMetric]
    var metricLabel = METRIC_LABELS[metric]

    var chartTitle = "Users Tweeting about Trump Impeachment"
    var chartFooter = `Chart shows users tweeting at least ${tweetMin} times about Trump Impeachment`
        chartFooter += ` whose mean opinion score is between ${opinionMin}% and ${opinionMax}%`
        chartFooter += ` (as scored by our ${opinionModel} opinion model).`
        //chartFooter += ` .`
        //chartFooter += ` sorted by ${metric}`
        //chartFooter += ` Includes only users categorized as: ${categories}`

    var chartPadding = {left: 175, top: 15, right: 50, bottom: 130} // spacing for axis labels (screen names)
    var domainPadding = {x: [10,0]} // spacing between bottom bar and bottom axis
    var chartTitleStyle = {marginTop: 10, marginBottom: 0}
    var legendData = [
        {name: "Pro-Impeachment (0%)", symbol: {fill: colorScale(0.15), type: "circle"}},
        //{name: "Neutral (50%)",        symbol: {fill: colorScale(0.50), type: "circle"}},
        {name: "Pro-Trump (100%)",     symbol: {fill: colorScale(0.85), type: "circle"}},
    ]
    var legendStyle = {
        //border: {stroke: "black"},
        title: {fontSize: 10},
        data: {fontSize: 10},
        labels: {fontSize: 10},
    }
    var barStyle = {
        data: {
            fill: ({ datum }) => colorScale(datum[opinionMetric]),
            //stroke: ({ index }) => +index % 2 === 0  ? "#000000" : "#c43a31",
            //fillOpacity: 0.7,
            //strokeWidth: 3
        },
        labels: {
            fontSize: 10,
            padding:2
            //fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
        }
    }
    var axisStyle = {
        //axis: {stroke: "#756f6a"},
        axisLabel: {fontSize: 10, padding:25},
        //grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
        ticks: {stroke: "grey", size: 4},
        tickLabels: {fontSize: 10, padding:5}
    }

    return (
        <span>
            <p className="app-center chart-title-p" style={chartTitleStyle}>{chartTitle}</p>
            <h4 className="app-center chart-title-h4" style={{chartTitleStyle}}>{chartTitle}</h4>

            <VictoryLegend orientation="horizontal" style={legendStyle} x={120} y={0} height={15}
                data={legendData}
            />

            <VictoryChart padding={chartPadding} domainPadding={domainPadding}>
                <VictoryBar horizontal style={barStyle} animate={true} barRatio={0.87}
                    data={users} x="handle" y={metric}
                    labels={({ datum }) => datum["scorePct"]}
                />
                <VictoryAxis/>
                <VictoryAxis dependentAxis style={axisStyle} tickFormat={formatBigNumber}
                    label={metricLabel}
                />

                <VictoryLabel text={chartFooter} y={215} style={{fill: "#000", fontSize:6}}/>

            </VictoryChart>

        </span>
    )
}
