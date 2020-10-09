import React, { PureComponent } from 'react'
//import Container from 'react-bootstrap/Container'
//import Spinner from 'react-bootstrap/Spinner'
import { VictoryTheme, VictoryChart, VictoryBar } from 'victory';

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

         var users = this.props.users.sort(function(a, b){
            return a["follower_count"] - b["follower_count"]
        })

        return (
            <VictoryChart>
                <VictoryBar
                    horizontal
                    style={{data: { fill: "#c43a31" }}}
                    data={users}
                    x="screen_name"
                    y="follower_count"
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
