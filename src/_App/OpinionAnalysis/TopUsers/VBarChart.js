import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
//import Button from 'react-bootstrap/Button'
import {VictoryChart, VictoryBar, VictoryAxis, VictoryLegend} from 'victory' // VictoryTheme, VictoryLabel
//import { orderBy } from 'lodash'
import {scaleSequential, interpolateRdBu} from 'd3'
import RangeSlider from 'react-bootstrap-range-slider'
//import { Range } from 'rc-slider'
import Slider from 'rc-slider'

import './VBarChart.css'

const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)

const colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

const allCategories = [
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

var allCategoryNames = allCategories.map(function(category){ return category["name"] })
var polCategoryNames = ["ELECTED-OFFICIAL", "PARTY", "GOVERNMENT"]
var mediaCategoryNames = ["MAJOR-MEDIA-OUTLET", "MEDIA-OUTLET", "NEWS-SHOW"] // "POLITICAL-COMMENTATOR"

function formatBigNumber(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
} // h/t: https://stackoverflow.com/a/9461657

export default class MyBarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweetMin: 5,
            opinionRange: [0, 100],
            userCategories: allCategoryNames, //["MAJOR-MEDIA-OUTLET","ELECTED-OFFICIAL","PARTY", "OTHER"],
            opinionModel: "lr"
        } // TODO: get URL params from router, so we can make custom charts and link people to them, like ?opinionMin=40&opinionMax=60&tweetMin=10
        this.handleTweetMinChange = this.handleTweetMinChange.bind(this)
        this.handleOpinionRangeChange = this.handleOpinionRangeChange.bind(this)
        //this.handleOpinionMinChange = this.handleOpinionMinChange.bind(this)
        //this.handleOpinionMaxChange = this.handleOpinionMaxChange.bind(this)
        this.handleCategoryCheck = this.handleCategoryCheck.bind(this)
        this.handleModelSelect = this.handleModelSelect.bind(this)

        // SHOW ME (STATE MANIPULATION SHORTCUTS)

        this.showUsersMostFollowed = this.showUsersMostFollowed.bind(this)
        this.showUsersMostActive = this.showUsersMostActive.bind(this)
        this.showUsersMostLeftLeaning = this.showUsersMostLeftLeaning.bind(this)
        this.showUsersMostRightLeaning = this.showUsersMostRightLeaning.bind(this)
        this.showUsersMostNeutral = this.showUsersMostNeutral.bind(this)

        this.showMediaMostFollowed = this.showMediaMostFollowed.bind(this)
        this.showMediaMostActive = this.showMediaMostActive.bind(this)
        this.showMediaMostLeftLeaning = this.showMediaMostLeftLeaning.bind(this)
        this.showMediaMostRightLeaning = this.showMediaMostRightLeaning.bind(this)
        this.showMediaMostNeutral = this.showMediaMostNeutral.bind(this)

        this.showPolsMostFollowed = this.showPolsMostFollowed.bind(this)
        this.showPolsMostActive = this.showPolsMostActive.bind(this)
        this.showPolsMostLeftLeaning = this.showPolsMostLeftLeaning.bind(this)
        this.showPolsMostRightLeaning = this.showPolsMostRightLeaning.bind(this)
        this.showPolsMostNeutral = this.showPolsMostNeutral.bind(this)
    }

    handleTweetMinChange(changeEvent){
        this.setState({tweetMin: changeEvent.target.value})
    }

    handleOpinionRangeChange(newRange){
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
        this.setState({userCategories: userCategories}) // this is updating state but why not triggering a re-render?
    }

    handleModelSelect(changeEvent){
        var model = changeEvent.target.value
        console.log("SELECT MODEL:", model)
        this.setState({"opinionModel": model})
    }

    // ALL USERS

    showUsersMostFollowed(){
        console.log("SHOW ME: USERS MOST FOLLOWED") // currently sorted to users most followed, so just open all params
        //var currentModel = this.state.opinionModel //TODO: use currently-selected opinionModel
        this.setState({tweetMin: 3, opinionRange: [0, 100], userCategories: allCategoryNames, opinionModel: "lr"})
    }
    showUsersMostActive(){
        console.log("SHOW ME: USERS MOST ACTIVE")
        this.setState({tweetMin: 200, opinionRange: [0, 100], userCategories: allCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showUsersMostLeftLeaning(){
        console.log("SHOW ME: USERS MOST LEFT-LEANING")
        this.setState({tweetMin: 3, opinionRange: [0, 10], userCategories: allCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showUsersMostRightLeaning(){
        console.log("SHOW ME: USERS MOST RIGHT-LEANING")
        this.setState({tweetMin: 3, opinionRange: [90, 100], userCategories: allCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showUsersMostNeutral(){
        console.log("SHOW ME: USERS MOST NEUTRAL")
        this.setState({tweetMin: 3, opinionRange: [45, 55], userCategories: allCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }

    // MEDIA

    showMediaMostFollowed(){
        console.log("SHOW ME: MEDIA MOST FOLLOWED") // currently sorted to users most followed, so just open all params
        this.setState({tweetMin: 3, opinionRange: [0, 100], userCategories: mediaCategoryNames, opinionModel: "lr"})
    }
    showMediaMostActive(){
        console.log("SHOW ME: MEDIA MOST ACTIVE")
        this.setState({tweetMin: 200, opinionRange: [0, 100], userCategories: mediaCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showMediaMostLeftLeaning(){
        console.log("SHOW ME: MEDIA MOST LEFT-LEANING")
        this.setState({tweetMin: 3, opinionRange: [0, 20], userCategories: mediaCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showMediaMostRightLeaning(){
        console.log("SHOW ME: MEDIA MOST RIGHT-LEANING")
        this.setState({tweetMin: 3, opinionRange: [70, 100], userCategories: mediaCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showMediaMostNeutral(){
        console.log("SHOW ME: MEDIA MOST NEUTRAL")
        this.setState({tweetMin: 3, opinionRange: [30, 70], userCategories: mediaCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }

    // POLITICIANS

    showPolsMostFollowed(){
        console.log("SHOW ME: POLITICIANS MOST FOLLOWED") // currently sorted to users most followed, so just open all params
        //var currentModel = this.state.opinionModel //TODO: use currently-selected opinionModel
        this.setState({tweetMin: 3, opinionRange: [0, 100], userCategories: polCategoryNames, opinionModel: "lr"})
    }
    showPolsMostActive(){
        console.log("SHOW ME: POLITICIANS MOST ACTIVE")
        this.setState({tweetMin: 75, opinionRange: [0, 100], userCategories: polCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showPolsMostLeftLeaning(){
        console.log("SHOW ME: POLITICIANS MOST LEFT-LEANING")
        this.setState({tweetMin: 3, opinionRange: [0, 5], userCategories: polCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showPolsMostRightLeaning(){
        console.log("SHOW ME: POLITICIANS MOST RIGHT-LEANING")
        this.setState({tweetMin: 3, opinionRange: [90, 100], userCategories: polCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }
    showPolsMostNeutral(){
        console.log("SHOW ME: POLITICIANS MOST NEUTRAL")
        this.setState({tweetMin: 3, opinionRange: [35, 65], userCategories: polCategoryNames, opinionModel: "lr"}) // TODO: use currently-selected opinionModel
    }



    render() {
        var tweetMin = this.state.tweetMin
        var opinionRange = this.state.opinionRange
        var userCategories = this.state.userCategories
        var opinionModel = this.state.opinionModel
        var opinionMetric = `avg_score_${opinionModel}`
        var barCount = this.props.barCount || 10 // would be nice to get 15 or 20 to work (with smaller bar labels)
        var handleCategoryCheck = this.handleCategoryCheck

        // RADIO BUTTONS FOR EACH CATEGORY
        var categoryChecks = allCategories.map(function(category){
            return (
                <Form.Check inline type="checkbox" key={category["name"]} value={category["name"]} label={category["label"]}
                    checked={userCategories.includes(category["name"])}
                    onChange={handleCategoryCheck}
                />
            )
        })

        // FILTER AND SORT USERS
        var users = this.props.users
            .filter(function(user){
                return (
                    user["status_count"] >= tweetMin &&
                    user[opinionMetric] * 100.0 >= opinionRange[0] &&
                    user[opinionMetric] * 100.0 <= opinionRange[1] &&
                    userCategories.includes(user["category"])
            )})
            .map(function(user){
                user["handle"] = `@${user['screen_name']}`
                user["scorePct"] = (user[opinionMetric] * 100.0).toFixed(1) + "%"
                return user
            })
            .sort(function(a, b){
                return a["follower_count"] - b["follower_count"] // chart wants this order
            }) // sort before slice
            .slice(-barCount) // negative number takes last X users (which is actually the top X users)

        var chartTitle = "Users Tweeting about Trump Impeachment" // TODO: dynamic
        var chartPadding = { left: 175, top: 15, right: 50, bottom: 130 } // spacing for axis labels (screen names)
        var domainPadding = { x: [10,0] } // spacing between bottom bar and bottom axis
        return (
            <span>

                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Show Me
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onSelect={this.showUsersMostFollowed}>Users most followed</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showUsersMostActive}>Users most active</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showUsersMostLeftLeaning}>Users most left-leaning</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showUsersMostRightLeaning}>Users most right-leaning</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showUsersMostNeutral}>Users most neutral</Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item onSelect={this.showMediaMostFollowed}>Media most followed</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showMediaMostActive}>Media most active</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showMediaMostLeftLeaning}>Media most left-leaning</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showMediaMostRightLeaning}>Media most right-leaning</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showMediaMostNeutral}>Media most neutral</Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item onSelect={this.showPolsMostFollowed}>Politicians most followed</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showPolsMostActive}>Politicians most active</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showPolsMostLeftLeaning}>Politicians most left-leaning</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showPolsMostRightLeaning}>Politicians most right-leaning</Dropdown.Item>
                        <Dropdown.Item onSelect={this.showPolsMostNeutral}>Politicians most neutral</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <p className="app-center" style={{marginTop:10, marginBottom:0}}>{chartTitle}</p>

                {/*

                <VictoryLabel text={chartTitle} textAnchor="center"/>

                */}

                <VictoryLegend height={15}
                    //title="Opinion Score" centerTitle
                    orientation="horizontal"
                    data={[
                        { name: "Pro-Impeachment (0%)", symbol: { fill: colorScale(0.15), type: "circle" } },
                        { name: "Pro-Trump (100%)",     symbol: { fill: colorScale(0.85), type: "circle"} },
                    ]}
                    //gutter={20}
                    x={120}
                    y={0}
                    //width={20}
                    //height={10}
                    //padding={{ top: 1000, bottom: 1000 }}
                    style={{
                        //parent: {},
                        //border: {stroke: "black"},
                        title: {fontSize: 10},
                        data: {fontSize: 10},
                        labels: {fontSize: 10},
                    }}
                />


                <VictoryChart padding={chartPadding} domainPadding={domainPadding} >
                    { /*
                    <VictoryLabel text="Chart Title"
                        x={225} y={10}
                        textAnchor="middle"
                    />

                    <VictoryLegend
                        height={15}
                        //title="Opinion Score" centerTitle
                        orientation="horizontal"
                        data={[
                            { name: "Pro-Impeachment (0%)", symbol: { fill: colorScale(0.15), type: "circle" } },
                            { name: "Pro-Trump (100%)",     symbol: { fill: colorScale(0.85), type: "circle"} },
                        ]}
                        //gutter={20}
                        x={200}
                        y={20}
                        //width={20}
                        //height={10}
                        //padding={{ top: 1000, bottom: 1000 }}
                        style={{
                            //parent: {},
                            //border: {stroke: "black"},
                            title: {fontSize: 10},
                            data: {fontSize: 10},
                            labels: {fontSize: 10},
                        }}
                    />
                    */}

                    <VictoryBar horizontal data={users} x="handle" y="follower_count"
                        animate={true}
                        //barWidth={12}
                        barRatio={0.87}
                        //alignment="middle"

                        labels={({ datum }) => datum["scorePct"]}
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
                        label="Follower Count"
                        style={{
                            //axis: {stroke: "#756f6a"},
                            axisLabel: {fontSize: 10, padding:25},
                            //grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
                            ticks: {stroke: "grey", size: 4},
                            tickLabels: {fontSize: 10, padding:5}
                        }}
                    />
                </VictoryChart>

                <Form style={{marginTop: -50}}>
                    <Form.Group as={Row}>
                        <Col xs="5">
                            <Form.Label>Minimum Tweet Count</Form.Label>

                            <RangeSlider min={3} max={200}
                                value={tweetMin}
                                onChange={this.handleTweetMinChange}
                                tooltip="on" // "on" //"auto"
                                tooltipPlacement="bottom"
                                //tooltipLabel=
                                //variant="dark"
                            />
                        </Col> {/*}
                        <Col xs="2" style={{"paddingTop":"1.9em"}}>
                            <Form.Control type="number" min={3} max={200} value={tweetMin} onChange={this.handleTweetMinChange}/>
                        </Col> */}

                        <Col xs="1">
                        </Col>

                        <Col xs="5">
                            <Form.Label>Mean Opinion Score</Form.Label>

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

                        {/*}
                        <Col xs="2" style={{"paddingTop":"1em"}}>
                            <Form.Control type="number" min={0} max={99} value={opinionRange[0]} onChange={this.handleOpinionMinChange}/>
                            <Form.Control type="number" min={1} max={100} value={opinionRange[1]} onChange={this.handleOpinionMaxChange}/>
                        </Col>  */}
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col xs="5">
                            <Form.Label>User Category</Form.Label>

                            <div key="inline-checkbox" className="mb-3">
                                {categoryChecks}
                            </div>

                            <p>NOTE: categories are subjective</p>
                        </Col>

                        <Col xs="1">
                        </Col>

                        <Col xs="5">
                            <Form.Label>Opinion Model</Form.Label>

                            <div key="inline-radios" className="mb-3">
                                <Form.Check inline label="Logistic Regression" value="lr" type="radio" id="radio-lr"
                                    checked={opinionModel === "lr"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline label="Naive Bayes" value="nb" type="radio" id="radio-nb"
                                    checked={opinionModel === "nb"}
                                    onChange={this.handleModelSelect}
                                />
                                <Form.Check inline label="BERT Transformer" value="bert" type="radio" id="radio-bert"
                                    checked={opinionModel === "bert"}
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

}
