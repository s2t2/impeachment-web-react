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
const SORT_METRICS = {
    "most-followed": {"metric": "follower_count", "order": "desc", "label": "Follower Count (in our dataset)"},
    "most-active": {"metric": "status_count", "order": "desc", "label": "Tweet Count"},
    "most-pro-trump": {"metric": "opinion_score", "order": "desc", "label": "Mean Opinion Score"},
    "most-pro-impeachment": {"metric": "opinion_score", "order": "asc", "label": "Mean Opinion Score"},
}
const DEFAULT_METRIC = "most-pro-impeachment" // "most-pro-trump" // "most-followed"
var BAR_COUNT = 10 // would be nice to get 15 or 20 to work (with smaller bar labels)

function formatBigNumber(num) {
    // h/t: https://stackoverflow.com/a/9461657
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}

export default class MyBarChart extends Component {
    constructor(props) {
        super(props)
        this.state = { // TODO: get URL params from router, so we can make custom charts and link people to them, like ?opinionMin=40&opinionMax=60&tweetMin=10

            sortMetric: SORT_METRICS[DEFAULT_METRIC]["metric"], // can be "follower_count", "status_count", "opinion_score" (needs differentiation)
            sortOrder:  SORT_METRICS[DEFAULT_METRIC]["order"], // "desc", "asc"
            sortLabel:  SORT_METRICS[DEFAULT_METRIC]["label"], // "desc", "asc"

            followerMin: 412_000,
            tweetMin: 30,
            opinionRange: [0, 100],
            userCategories: ALL_CATEGORY_NAMES,

            opinionMetric: "avg_score_lr",
        }
        this.handleTweetMinChange = this.handleTweetMinChange.bind(this)
        this.handleFollowerMinChange = this.handleFollowerMinChange.bind(this)

        this.handleOpinionRangeChange = this.handleOpinionRangeChange.bind(this)
        this.handleCategoryCheck = this.handleCategoryCheck.bind(this)
        this.handleModelSelect = this.handleModelSelect.bind(this)

        this.handleCategorySelect = this.handleCategorySelect.bind(this)
        this.handleMetricSelect = this.handleMetricSelect.bind(this)
        this.barLabel = this.barLabel.bind(this)
        this.barSizeMetric = this.barSizeMetric.bind(this)
    }

    render() {
        var tweetMin = this.state.tweetMin
        var followerMin = this.state.followerMin
        var opinionRange = this.state.opinionRange
        var userCategories = this.state.userCategories
        var opinionMetric = this.state.opinionMetric

        var barLabel = this.barLabel
        var barSizeMetric = this.barSizeMetric

        var sortMetric = this.state.sortMetric
        if(sortMetric === "opinion_score"){
            sortMetric = opinionMetric
        }
        var sortOrder = this.state.sortOrder
        var sortLabel = this.state.sortLabel

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
                user["score_pct"] = (user[opinionMetric] * 100.0).toFixed(1) + "%"
                user["inverse_score"] = (1 - user[opinionMetric]) // hack for reversing pro-impeachment bar sizes from 0.05 to 0.95
                return user
            })
            .sort(function(a, b){
                // chart wants this order
                if(sortOrder === "asc"){
                    return b[sortMetric] - a[sortMetric]
                } else {
                    return a[sortMetric] - b[sortMetric]
                }
            }) // sort before slice
            .slice(-BAR_COUNT) // negative number takes last X users (which is actually the top X users)

        // CHART OPTIONS

        var chartTitle = "Users Tweeting about Trump Impeachment" // TODO: dynamic
        var chartPadding = { left: 175, top: 15, right: 50, bottom: 130 } // spacing for axis labels (screen names)
        var domainPadding = { x: [10,0] } // spacing between bottom bar and bottom axis

        return (
            <span>
                <p className="app-center chart-title-p" style={{marginTop:10, marginBottom:0}}>{chartTitle}</p>
                <h4 className="app-center chart-title-h4" style={{marginTop:10, marginBottom:0}}>{chartTitle}</h4>

                <VictoryLegend height={17}
                    //title="Opinion Score" centerTitle
                    orientation="horizontal"
                    data={[
                        { name: "Pro-Impeachment (0%)", symbol: { fill: colorScale(0.15), type: "circle" } },
                        { name: "Pro-Trump (100%)",     symbol: { fill: colorScale(0.85), type: "circle"} },
                    ]}
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
                        data={users} x="handle" y={barSizeMetric()} // barSize() sortMetric or "inverse_score"
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
                    <VictoryAxis
                        //label="Screen Name"
                        //tickFormat={["a", "b", "c", "d", "e"]}
                    />
                    <VictoryAxis dependentAxis
                        //tickFormat={(tick) => `${tick}%`}
                        tickFormat={formatBigNumber}
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
                            <Form.Control as="select" size="lg" custom onChange={this.handleCategorySelect}>
                                <option value="all">All Users</option>
                                <option value="media">Media</option>
                                <option value="politician">Politicians</option>
                                <option value="commentator">Commentators</option>
                                <option value="celebrity">Celebrities</option>
                            </Form.Control>
                        </Col>

                        <Col xs="6">
                            <Form.Label>Sort By:</Form.Label>
                            <Form.Control as="select" size="lg" custom onChange={this.handleMetricSelect}>
                                <option value="most-followed">Follower Count</option>
                                <option value="most-active">Tweet Count</option>
                                <option value="most-pro-trump">Pro-Trump Score</option>
                                <option value="most-pro-impeachment">Pro-Impeachment Score</option>
                                {/* <option value="most-neutral">Most Neutral</option> */}
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} style={{marginTop: 35}}>
                        <Col xs="5">
                            <Form.Label>Minimum Followers:</Form.Label>

                            <RangeSlider min={10000} max={1000000} step={10000}
                                value={followerMin}
                                onChange={this.handleFollowerMinChange}
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
                                onChange={this.handleOpinionRangeChange}
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
                                onChange={this.handleTweetMinChange}
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
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline label="Naive Bayes" value="avg_score_nb" type="radio"
                                    checked={opinionMetric === "avg_score_nb"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline label="BERT Transformer" value="avg_score_bert" type="radio"
                                    checked={opinionMetric === "avg_score_bert"}
                                    onChange={this.handleModelSelect}
                                />
                            </div>
                        </Col>
                    </Form.Group>
                </Form>
            </span>
        )
    }

    componentDidMount(){
        console.log("BAR CHART DID MOUNT")
    }

    componentDidUpdate(prevProps) {
        console.log("BAR CHART DID UPDATE")
    }

    handleTweetMinChange(changeEvent){
        ReactGA.event({
            category: "Top Users Chart Interaction",
            action: "Change Tweet Min",
            value: changeEvent.target.value
        })
        this.setState({tweetMin: changeEvent.target.value})
    }

    handleFollowerMinChange(changeEvent){
        ReactGA.event({
            category: "Top Users Chart Interaction",
            action: "Change Follower Min",
            value: changeEvent.target.value
        })
        this.setState({followerMin: changeEvent.target.value})
    }

    handleOpinionRangeChange(newRange){
        //ReactGA.event({
        //    category: "Top Users Chart Interaction",
        //    action: "Change Opinion Min",
        //    value: newRange[0]
        //})
        //ReactGA.event({
        //    category: "Top Users Chart Interaction",
        //    action: "Change Opinion Max",
        //    value: newRange[1]
        //})
        ReactGA.event({
            category: "Top Users Chart Interaction",
            action: "Change Opinion Range",
            label: newRange.join(", ")
        })
        console.log("CHANGE OPINION RANGE", newRange)
        this.setState({opinionRange: newRange})
    }

    handleCategoryCheck(changeEvent){
        var category = changeEvent.target.value
        console.log("CHECK CATEGORY:", category)

        var userCategories = this.state.userCategories
        var categoryIndex = userCategories.indexOf(category) // will be -1 if item not in array
        if (categoryIndex >= 0 ) {
            userCategories.splice(categoryIndex, 1) // remove 1 item from array at the given position
        } else {
            userCategories.push(category)
        }

        console.log("CATEGORIES:", userCategories)
        ReactGA.event({
            category: "Top Users Chart Interaction",
            action: "Change Opinion Min",
            label: userCategories.join(", ")
        })
        this.setState({userCategories: userCategories})
    }

    handleModelSelect(changeEvent){
        var opinionMetric = changeEvent.target.value
        console.log("SELECT OPINION METRIC:", opinionMetric)
        ReactGA.event({
            category: "Top Users Chart Interaction",
            action: "Select Opinion Model",
            label: opinionMetric
        })
        this.setState({"opinionMetric": opinionMetric})
    }

    handleCategorySelect(changeEvent){
        var val = changeEvent.target.value
        console.log("FILTER BY CATEGORY:", val)
        ReactGA.event({
            category: "Top Users Chart Interaction",
            action: "Select User Category",
            label: val
        })
        this.setState({userCategories: FILTER_CATEGORIES[val]})
    }

    handleMetricSelect(changeEvent){
        var val = changeEvent.target.value
        console.log("SORT BY METRIC:", val)
        ReactGA.event({
            category: "Top Users Chart Interaction",
            action: "Select Sort Metric",
            label: val
        })
        this.setState({
            sortMetric: SORT_METRICS[val]["metric"],
            sortOrder: SORT_METRICS[val]["order"],
            sortLabel: SORT_METRICS[val]["label"]
        })
    }

    barLabel(datum){
        var metric = this.state.sortMetric
        if (metric == "opinion_score"){
            return datum["score_pct"]
        } else {
            return formatBigNumber(datum[metric])
        }

    }

    barSizeMetric(){
        var sortMetric = this.state.sortMetric
        var sortOrder = this.state.sortOrder
        var opinionMetric = this.state.opinionMetric
        console.log("BAR SIZE", sortMetric, sortOrder, opinionMetric)

        if (sortMetric == "opinion_score" && sortOrder == "asc"){
            return "inverse_score"
        } else if(sortMetric == "opinion_score" && sortOrder == "desc") {
            return opinionMetric
        } else {
            return sortMetric
        }
    }
}
