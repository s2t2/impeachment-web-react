import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Dropdown from 'react-bootstrap/Dropdown'
//import Button from 'react-bootstrap/Button'
import {VictoryChart, VictoryBar, VictoryAxis, VictoryLegend} from 'victory' // VictoryTheme, VictoryLabel
//import { orderBy } from 'lodash'
import {scaleSequential, interpolateRdBu} from 'd3'
import RangeSlider from 'react-bootstrap-range-slider'
//import { Range } from 'rc-slider'
import Slider from 'rc-slider'
import ReactGA from 'react-ga'

import './VBarChart.css'

const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)
const colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

var BAR_COUNT = 10 // would be nice to get 15 or 20 to work (with smaller bar labels)

const ALL_CATEGORIES = [
    {"name":"GOVERNMENT",               "label": "Government"},
    {"name":"PARTY",                    "label": "Political Party"},
    {"name":"ELECTED-OFFICIAL",         "label": "Elected Official"},
    {"name":"MAJOR-MEDIA-OUTLET",       "label": "Major Media Outlet"},
    {"name":"MEDIA-OUTLET",             "label": "Media Outlet"},
    {"name":"NEWS-SHOW",                "label": "News Show"},
    {"name":"POLITICAL-COMMENTATOR",    "label": "Political Commentator"},
    {"name":"LEGAL-SCHOLAR",            "label": "Legal Scholar"},
    {"name":"CELEBRITY",                "label": "Celebrity"},
    {"name":"OTHER",                    "label": "Other"}
]
const ALL_CATEGORY_NAMES = ALL_CATEGORIES.map(function(category){ return category["name"] })
const FILTER_CATEGORIES = {
    "all": ALL_CATEGORY_NAMES,
    "media": ["MAJOR-MEDIA-OUTLET", "MEDIA-OUTLET", "NEWS-SHOW"],
    "politician": ["ELECTED-OFFICIAL", "PARTY", "GOVERNMENT"],
    "commentator": ["POLITICAL-COMMENTATOR", "LEGAL-SCHOLAR"],
    "celebrity": ["CELEBRITY"],


}

const SORT_BY = {
    "follower_count": {"metric": "follower_count", "label": "Follower Count"},
    "status_count": {"metric": "status_count", "label": "Tweet Count"},
    "opinion_score": {"metric": "opinion_score", "label": "Mean Opinion Score (Pro-Trump)"},
    "inverse_opinion_score": {"metric": "inverse_opinion_score", "label": "Mean Opinion Score (Pro-Impeachment)"},
}
const DEFAULT_METRIC = "opinion_score"

function formatBigNumber(num) {
    // h/t: https://stackoverflow.com/a/9461657
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}

function formatPct(num) {
    // formats 0.3444444 as "34.4%"
    return (num * 100.0).toFixed(1) + "%"
}

export default class MyBarChart extends Component {
    constructor(props) {
        super(props)
        this.state = { // TODO: get URL params from router, so we can make custom charts and link people to them, like ?opinionMin=40&opinionMax=60&tweetMin=10
            userCategories: ALL_CATEGORY_NAMES,
            sortMetric: SORT_BY[DEFAULT_METRIC]["metric"],
            sortLabel: SORT_BY[DEFAULT_METRIC]["label"],
            opinionMetric: "avg_score_lr",
            opinionRange: [0, 100],
            followerMin: 412_000,
            tweetMin: 30,
        }

        this.selectUserCategories = this.selectUserCategories.bind(this)
        this.selectSortMetric = this.selectSortMetric.bind(this)
        this.selectOpinionMetric = this.selectOpinionMetric.bind(this)
        this.slideOpinionRange = this.slideOpinionRange.bind(this)
        this.slideFollowerMin = this.slideFollowerMin.bind(this)
        this.slideTweetMin = this.slideTweetMin.bind(this)

        this.axisTick = this.axisTick.bind(this)
        this.barLabel = this.barLabel.bind(this)
    }

    render() {
        var userCategories = this.state.userCategories
        var sortMetric = this.state.sortMetric
        var sortLabel = this.state.sortLabel
        var opinionMetric = this.state.opinionMetric
        var opinionRange = this.state.opinionRange
        var followerMin = this.state.followerMin
        var tweetMin = this.state.tweetMin

        var axisTick = this.axisTick
        var barLabel = this.barLabel

        // FILTER AND SORT USERS

        var users = this.props.users
            .filter(function(user){
                return (
                    user["status_count"] >= tweetMin &&
                    user["follower_count"] >= followerMin &&
                    user[opinionMetric] * 100.0 >= opinionRange[0] &&
                    user[opinionMetric] * 100.0 <= opinionRange[1] &&
                    userCategories.includes(user["category"])
            )})
            .map(function(user){
                user["handle"] = `@${user['screen_name']}`
                //user["score_pct"] = (user[opinionMetric] * 100.0).toFixed(1) + "%"
                user["opinion_score"] = user[opinionMetric]
                user["inverse_opinion_score"] = (1 - user[opinionMetric])
                return user
            })
            .sort(function(a, b){
                return a[sortMetric] - b[sortMetric] // chart wants this order
            }) // sort before slice
            .slice(-BAR_COUNT) // negative number takes last X users (which is actually the top X users)

        // CHART OPTIONS

        var chartTitle = "Users Tweeting about Trump Impeachment" // TODO: dynamic
        var chartPadding = { left: 175, top: 15, right: 50, bottom: 130 } // spacing for axis labels (screen names)
        var domainPadding = { x: [10,0] } // spacing between bottom bar and bottom axis
        var legendData
        if (sortMetric === "inverse_opinion_score"){
            //legendData.reverse() // mutating
            legendData = [
                { name: "Pro-Trump (0%)",         symbol: { fill: colorScale(0.85), type: "circle"} },
                { name: "Pro-Impeachment (100%)", symbol: { fill: colorScale(0.15), type: "circle" } },
            ]
        } else {
            legendData = [
                { name: "Pro-Impeachment (0%)",  symbol: { fill: colorScale(0.15), type: "circle" } },
                { name: "Pro-Trump (100%)",      symbol: { fill: colorScale(0.85), type: "circle"} },
            ]
        }

        return (
            <span>
                <p className="app-center chart-title-p" style={{marginTop:10, marginBottom:0}}>{chartTitle}</p>
                <h4 className="app-center chart-title-h4" style={{marginTop:10, marginBottom:0}}>{chartTitle}</h4>

                <VictoryLegend height={17}
                    //title="Opinion Score" centerTitle
                    orientation="horizontal"
                    data={legendData}
                    gutter={15} // number of pixels between legend columns
                    x={120}
                    y={0}
                    //width={20}
                    style={{
                        //parent: {},
                        //border: {stroke: "black"},
                        title: {fontSize: 10},
                        data: {fontSize: 10},
                        labels: {fontSize: 10},
                    }}
                />

                <VictoryChart padding={chartPadding} domainPadding={domainPadding} >

                    <VictoryBar horizontal
                        data={users} x="handle" y={sortMetric}
                        animate={true}
                        //barWidth={12}
                        barRatio={0.87}
                        //alignment="middle"

                        labels={({ datum }) => barLabel(datum)}
                        //labelComponent={<VictoryLabel dx={-30}/>}
                        style={{
                            //parent: { border: "1px solid #ccc" }
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
                        }}
                    />
                    <VictoryAxis/>
                    <VictoryAxis dependentAxis
                        //tickFormat={(tick) => `${1-tick}%`}
                        //tickFormat={formatBigNumber}
                        tickFormat={axisTick}
                        label={sortLabel}
                        style={{
                            //axis: {stroke: "#756f6a"},
                            axisLabel: {fontSize: 10, padding:25},
                            //grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
                            ticks: {stroke: "grey", size: 4},
                            tickLabels: {fontSize: 10, padding:5}
                        }}
                    />
                </VictoryChart>

                <Form className="below-chart">
                    <Form.Group as={Row}>
                        <Col xs="6">
                            <Form.Label>User Category:</Form.Label>
                            <Form.Control as="select" size="lg" custom onChange={this.selectUserCategories}>
                                <option value="all">All Users</option>
                                <option value="media">Media</option>
                                <option value="politician">Politicians</option>
                                <option value="commentator">Commentators</option>
                                <option value="celebrity">Celebrities</option>
                            </Form.Control>
                        </Col>

                        <Col xs="6">
                            <Form.Label>Sort By:</Form.Label>
                            <Form.Control as="select" size="lg" custom value={sortMetric} onChange={this.selectSortMetric}>
                                <option value="follower_count">Follower Count</option>
                                <option value="status_count">Tweet Count</option>
                                <option value="opinion_score">Pro-Trump Score</option>
                                <option value="inverse_opinion_score">Pro-Impeachment Score</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{marginTop: 35}}>
                        <Col xs="5">
                            <Form.Label>Minimum Followers:</Form.Label>

                            <RangeSlider min={10000} max={1000000} step={10000}
                                value={followerMin}
                                onChange={this.slideFollowerMin}
                                tooltip="on" // "on" //"auto"
                                tooltipPlacement="bottom"
                                //tooltipLabel=
                                //variant="dark"
                            />
                        </Col>

                        <Col xs="1">
                        </Col>

                        <Col xs="5">
                            <Form.Label>Mean Opinion Score:</Form.Label>

                            <Range min={0} max={100} step={1}
                                defaultValue={[0, 100]}
                                value={opinionRange}
                                marks={{
                                    0: "Pro-Impeachment",
                                    10: "",
                                    20: "",
                                    30: "",
                                    40: "",
                                    50: "Neutral",
                                    60: "",
                                    70: "",
                                    80: "",
                                    90: "",
                                    100: "Pro-Trump"}}
                                onChange={this.slideOpinionRange}
                                allowCross={false}
                                //pushable={10}
                                tooltip="auto"
                                tipFormatter={value => `${value}%` }
                                tipProps={{
                                    visible: true,
                                    placement: "top" // "top" "bottom"
                                }}
                            />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} style={{marginTop: 35}}>
                        <Col xs="5">
                            <Form.Label>Minimum Tweets:</Form.Label>

                            <RangeSlider min={3} max={200}
                                value={tweetMin}
                                onChange={this.slideTweetMin}
                                tooltip="on" // "on" //"auto"
                                tooltipPlacement="bottom"
                                //tooltipLabel=
                                //variant="dark"
                            />
                        </Col>

                        <Col xs="1">
                        </Col>

                        <Col xs="5">
                            <Form.Label>Opinion Model:</Form.Label>

                            <div key="inline-radios" className="mb-3">
                                <Form.Check inline label="Logistic Regression" value="avg_score_lr" type="radio"
                                    checked={opinionMetric === "avg_score_lr"}
                                    onChange={this.selectOpinionMetric}
                                />
                                <Form.Check inline label="Naive Bayes" value="avg_score_nb" type="radio"
                                    checked={opinionMetric === "avg_score_nb"}
                                    onChange={this.selectOpinionMetric}
                                />
                                <Form.Check inline label="BERT Transformer" value="avg_score_bert" type="radio"
                                    checked={opinionMetric === "avg_score_bert"}
                                    onChange={this.selectOpinionMetric}
                                />
                            </div>
                        </Col>
                    </Form.Group>
                </Form>
            </span>
        )
    }

    componentDidMount(){ console.log("BAR CHART DID MOUNT") }
    componentDidUpdate(prevProps) { console.log("BAR CHART DID UPDATE") }

    axisTick(val){
        if (this.state.sortMetric.includes("opinion_score")){
            return formatPct(val)
        } else {
            return formatBigNumber(val)
        }
    }

    barLabel(datum){
        var sortMetric = this.state.sortMetric
        if (sortMetric.includes("opinion_score")){
            return formatPct(datum[sortMetric])
        } else {
            return formatBigNumber(datum[sortMetric])
        }
    }

    selectUserCategories(changeEvent){
        var val = changeEvent.target.value
        console.log("SELECT USER CATEGORIES:", val)
        ReactGA.event({category: "Top Users Chart", action: "Select User Categories", label: val})
        this.setState({userCategories: FILTER_CATEGORIES[val]})
    }

    selectSortMetric(changeEvent){
        var val = changeEvent.target.value
        console.log("SORT BY:", val, SORT_BY[val])
        ReactGA.event({category: "Top Users Chart", action: "Select Sort Metric", label: SORT_BY[val]["label"]})
        this.setState({
            sortMetric: SORT_BY[val]["metric"],
            sortLabel: SORT_BY[val]["label"],
        })
    }

    selectOpinionMetric(changeEvent){
        var val = changeEvent.target.value
        console.log("SELECT OPINION METRIC:", val)
        ReactGA.event({category: "Top Users Chart", action: "Select Opinion Metric", label: val})
        this.setState({opinionMetric: val})
    }

    slideTweetMin(changeEvent){
        var val = changeEvent.target.value
        //console.log("SLIDE TWEET MIN:", val)
        ReactGA.event({category: "Top Users Chart", action: "Slide Tweet Min", value: val})
        this.setState({tweetMin: val})
    }

    slideFollowerMin(changeEvent){
        var val = changeEvent.target.value
        //console.log("SLIDE FOLLOWER MIN:", val)
        ReactGA.event({category: "Top Users Chart", action: "Slide Follower Min", value: val})
        this.setState({followerMin: val})
    }

    slideOpinionRange(newRange){
        //console.log("CHANGE OPINION RANGE", newRange)
        ReactGA.event({category: "Top Users Chart", action: "Slide Opinion Range", label: newRange.join(", ")})
        this.setState({opinionRange: newRange})
    }

}
