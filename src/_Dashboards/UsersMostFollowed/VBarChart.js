import React, { PureComponent } from 'react'
//import Container from 'react-bootstrap/Container'
//import Spinner from 'react-bootstrap/Spinner'
import { VictoryTheme, VictoryChart, VictoryBar, VictoryLabel } from 'victory';

function fillColor(datum) {
   return datum["fill"]
}

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
        }).map(function(u){
            var user = u
            user["fill"] = "#D0021B" // TODO: use d3 color scale :-D

            return user
        })

        return (
            <VictoryChart >
                <VictoryBar
                    horizontal
                    data={users}
                    x="screen_name"
                    y="follower_count"
                    animate={true}

                    //barWidth={12}
                    barRatio={0.95}
                    //alignment="middle"

                    labels={({ datum }) => datum["avg_score_lr"]}
                    //labelComponent={<VictoryLabel dx={-30}/>}
                    style={{
                        data: {
                            fill: ({ datum }) => fillColor(datum) // help I don't know how this syntax works. do we have to bind.this or something somewhere?
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
