import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {VictoryChart, VictoryBar, VictoryAxis} from 'victory' // VictoryTheme, VictoryLabel
//import { orderBy } from 'lodash'
import {scaleSequential, interpolateRdBu} from 'd3'
import './VBarChart.css'

import RangeSlider from 'react-bootstrap-range-slider'
//import { Range } from 'rc-slider'
import Slider from 'rc-slider'
const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range);

const colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

function formatBigNumber(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
} // h/t: https://stackoverflow.com/a/9461657

export default class MyBarChart extends Component {
    constructor(props) {
      super(props)
      this.state = {
        tweetMin: 5,
        opinionRange: [0, 100],
        userCategories: ["MAJOR-MEDIA-OUTLET","ELECTED-OFFICIAL","PARTY", "OTHER"],
        opinionModel: "lr"
    } // TODO: get URL params from router, so we can make custom charts and link people to them, like ?opinionMin=40&opinionMax=60&tweetMin=10
      this.handleTweetMinChange = this.handleTweetMinChange.bind(this)
      this.handleOpinionRangeChange = this.handleOpinionRangeChange.bind(this)
      //this.handleOpinionMinChange = this.handleOpinionMinChange.bind(this)
      //this.handleOpinionMaxChange = this.handleOpinionMaxChange.bind(this)
      this.handleCategoryCheck = this.handleCategoryCheck.bind(this)
      this.handleModelSelect = this.handleModelSelect.bind(this)
    }

    handleTweetMinChange(changeEvent){
        this.setState({tweetMin: changeEvent.target.value})
    }

    handleOpinionRangeChange(newRange){
        console.log("CHANGE OPINION RANGE", newRange)
        this.setState({opinionRange: newRange})
    }

    //handleOpinionMinChange(changeEvent){
    //    console.log("CHANGE OPINION MIN", changeEvent.target.value)
    //    //var opinionMin = parseFloat(changeEvent.target.value) // convert string to decimal, but they end up as NaN. TODO: (maybe take user inputs as integers)
    //    var opinionMin = changeEvent.target.value
    //    var opinionMax = this.state.opinionRange[1]
    //    this.setState({opinionRange: [changeEvent.target.value, opinionMax]})
    //}

    //handleOpinionMaxChange(changeEvent){
    //    console.log("CHANGE OPINION MAX", "FROM", this.state.opinionRange, "TO", changeEvent.target.value)
    //    var opinionMin = this.state.opinionRange[0]
    //    //var opinionMax = parseFloat(changeEvent.target.value) // convert string to decimal, but they end up as NaN. TODO: (maybe take user inputs as integers)
    //    var opinionMax = changeEvent.target.value
    //    this.setState({opinionRange: [opinionMin, opinionMax]})
    //}

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

    render() {
        var tweetMin = this.state.tweetMin
        var opinionRange = this.state.opinionRange
        var userCategories = this.state.userCategories
        var opinionModel = this.state.opinionModel
        var opinionMetric = `avg_score_${opinionModel}`
        var barCount = this.props.barCount || 10 // would be nice to get 15 or 20 to work (with smaller bar labels)

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


        var chartPadding = { left: 175, top: 15, right: 50, bottom: 130 } // spacing for axis labels (screen names)
        var domainPadding = { x: [10,0] } // spacing between bottom bar and bottom axis
        return (
            <span>

                <VictoryChart padding={chartPadding} domainPadding={domainPadding} >
                    <VictoryBar horizontal data={users} x="handle" y="follower_count"
                        animate={true}
                        //barWidth={12}
                        barRatio={0.87}
                        //alignment="middle"

                        labels={({ datum }) => datum["scorePct"]}
                        //labelComponent={<VictoryLabel dx={-30}/>}
                        style={{
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

                <Form >
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
                                <Form.Check inline label="Media Outlet" value="MAJOR-MEDIA-OUTLET" type="checkbox" id="check-major-media-outlet"
                                    checked={userCategories.includes("MAJOR-MEDIA-OUTLET")}
                                    onChange={this.handleCategoryCheck}
                                />

                                <Form.Check inline label="Elected Official" value="ELECTED-OFFICIAL" type="checkbox" id="check-elected-official"
                                    checked={userCategories.includes("ELECTED-OFFICIAL")}
                                    onChange={this.handleCategoryCheck}
                                />
                                <Form.Check inline label="Political Party" value="PARTY" type="checkbox" id="check-party"
                                    checked={userCategories.includes("PARTY")}
                                    onChange={this.handleCategoryCheck}
                                />
                                <Form.Check inline label="Others" value="OTHER" type="checkbox" id="check-others"
                                    checked={userCategories.includes("OTHER")}
                                    onChange={this.handleCategoryCheck}
                                />
                            </div>
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
