import React, { PureComponent } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Spinner from 'react-bootstrap/Spinner'
import { VictoryTheme, VictoryChart, VictoryBar, VictoryLabel } from 'victory';
import {scaleSequential, interpolateRdBu, scaleLinear, scaleDiverging, scaleThreshold} from 'd3'
import { orderBy } from 'lodash';




import RangeSlider from 'react-bootstrap-range-slider';

//import Slider, { Range } from 'rc-slider';
//import Slider from 'rc-slider';
//const createSliderWithTooltip = Slider.createSliderWithTooltip
//const Range = createSliderWithTooltip(Slider.Range) // the tooltip doesn't move

//import { Range } from 'rc-slider';

import Slider from 'rc-slider';
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);





var colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

//var colorScale = scaleDiverging()
//    .domain([1, 0.5, 0]) // reverse so 0:blue and 1:red
//    .range(['#b2182b','#f7f7f7','#2166ac'])

//var colorScale = scaleDiverging(interpolateRdBu)
//    .domain([1, 0.5, 0]) // reverse so 0:blue and 1:red

//var colorScale = scaleLinear()
//    .domain([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]) // reverse so 0:blue and 1:red
//    .range(['#b2182b','#d6604d','#f4a582','#fddbc7','#f7f7f7','#d1e5f0','#92c5de','#4393c3','#2166ac'])
//    //.range(['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#f7f7f7','#d1e5f0','#92c5de','#4393c3','#2166ac','#053061'])

export default class MyBarChart extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {tweetMin: 3, opinionRange: [0,1], parsedResponse: null} // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
      //this.fetchData = this.fetchData.bind(this)
      this.handleTweetMinChange = this.handleTweetMinChange.bind(this)
      this.handleOpinionRangeChange = this.handleOpinionRangeChange.bind(this)
      this.handleOpinionMinChange = this.handleOpinionMinChange.bind(this)
      this.handleOpinionMaxChange = this.handleOpinionMaxChange.bind(this)
    }

    handleTweetMinChange(changeEvent){
        this.setState({tweetMin: changeEvent.target.value})
    }


    handleOpinionRangeChange(newRange){
        console.log("CHANGE OPINION RANGE", newRange)
        this.setState({opinionRange: newRange})
    }

    handleOpinionMinChange(val){
        console.log("CHANGE OPINION MIN", val)
        //var opinionMax = this.state.opinionRange[1]
        //this.setState({opinionRange: [changeEvent.target.value, opinionMax]})
    }

    handleOpinionMaxChange(val){
        console.log("CHANGE OPINION MAX", val)
        //var opinionMin = this.state.opinionRange[0]
        //this.setState({opinionRange: [opinionMin, changeEvent.target.value]})
    }



    render() {
        var tweetMin = this.state.tweetMin
        var opinionRange = this.state.opinionRange

        var users = this.props.users.filter(function(user){
            return user["status_count"] >= tweetMin
        }).map(function(user){
            user["handle"] = `@${user['screen_name']}`
            user["scorePct"] = (user["avg_score_lr"] * 100.0).toFixed(1) + "%"
            return user
        })
        .sort(function(a, b){
            return a["follower_count"] - b["follower_count"]
        }).slice(-10) // negative number takes last 10 (which is actually the top ten)

        return (
            <span>

                <Form style={{"paddingTop":"3em"}}>
                    <Form.Group as={Row}>
                        <Col xs="3">
                            <Form.Label>Minimum Tweet Count</Form.Label>
                            <RangeSlider
                                min={3}
                                max={200}
                                value={tweetMin}
                                onChange={this.handleTweetMinChange}
                                tooltip={"auto"}
                                tooltipPlacement={"bottom"}
                                //tooltipLabel=
                                //variant="dark"
                            />
                        </Col>
                        <Col xs="1" style={{"paddingTop":"1.9em"}}>
                            <Form.Control
                                value={tweetMin}
                                onChange={this.handleTweetMinChange}
                            />
                        </Col>
                    </Form.Group>














                    <Form.Group as={Row}>
                        <Col xs="3">
                            <Form.Label>Mean Opinion Score Range</Form.Label>
                            <Range
                                min={0}
                                max={1}
                                step={0.01}
                                defaultValue={[0, 1]}
                                onChange={this.handleOpinionRangeChange}
                                allowCross={false}
                                marks={{0: "Pro-Impeachment", 1: "Anti-Impeachment"}}
                                tooltip={"auto"}
                                tipFormatter={value => `${(value * 100.0).toFixed(0)}%` }
                                tipProps={{
                                    placement: "top",
                                    visible: true
                                }}
                            />
                        </Col>
                        <Col xs="1" style={{"paddingTop":"1.9em"}}>


                            {/*<Form.Control
                                value={opinionRange[0]}
                                //onChange={this.handleOpinionMinChange}
                            />
                            <Form.Control
                                value={opinionRange[1]}
                                //onChange={this.handleOpinionMaxChange}
                            />

                            */}

                        </Col>

                    </Form.Group>





















                </Form>

                <VictoryChart >
                    <VictoryBar
                        horizontal
                        data={users}
                        x="handle"
                        y="follower_count"
                        animate={true}

                        //barWidth={12}
                        barRatio={0.95}
                        //alignment="middle"

                        labels={({ datum }) => datum["scorePct"]}
                        //labelComponent={<VictoryLabel dx={-30}/>}
                        style={{
                            data: {
                                fill: ({ datum }) => colorScale(datum["avg_score_lr"])
                            }
                        }}


                    />
                </VictoryChart>

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
