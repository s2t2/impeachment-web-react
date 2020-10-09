import React, { PureComponent } from 'react'
//import Container from 'react-bootstrap/Container'
//import Spinner from 'react-bootstrap/Spinner'
import { VictoryTheme, VictoryChart, VictoryBar, VictoryLabel } from 'victory';
import {scaleSequential, interpolateRdBu, scaleLinear, scaleDiverging, scaleThreshold} from 'd3'

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
    //constructor(props) {
    //  super(props)
    //  //this.state = {limit: 500, parsedResponse: null} // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
    //  //this.fetchData = this.fetchData.bind(this)
    //}
    render() {
        //var rows = this.props.users.map(function(user){
        //  var scorePct = (user["avg_score_lr"] * 100.0).toFixed(1) + "%"
        //  var userHandle = "@" + user["screen_name"]
        //  var followerCount = user["follower_count"]

        //  return <li> {userHandle} |  {followerCount} | ({scorePct}) </li>
        //})


        var users = this.props.users.slice(0, 10).sort(function(a, b){
            return a["follower_count"] - b["follower_count"]
        }).map(function(user){
            user["handle"] = `@${user['screen_name']}`
            return user
        })

        return (
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

                    labels={({ datum }) => datum["avg_score_lr"]}
                    //labelComponent={<VictoryLabel dx={-30}/>}
                    style={{
                        data: {
                            fill: ({ datum }) => colorScale(datum["avg_score_lr"]) // help I don't know how this syntax works. do we have to bind.this or something somewhere?
                        }
                    }}


                />
            </VictoryChart>
        )
    }

    componentDidMount(){
        console.log("BAR CHART DID MOUNT")
    }

    componentDidUpdate(prevProps) {
        console.log("BAR CHART DID UPDATE")
    }

}
