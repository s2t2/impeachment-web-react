import React, { PureComponent } from 'react'
//import Container from 'react-bootstrap/Container'
//import Spinner from 'react-bootstrap/Spinner'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  //ReferenceLine
} from 'recharts';


class CustomizedLabel extends PureComponent{
  render () {

    const {x, y, fill, value} = this.props

   	return (
        <text
            x={x}
            y={y}
            fontSize='16'
            fontFamily='sans-serif'
            fill={fill}
            textAnchor="start">{value}%
        </text>
    )
  }
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

        return (
            <div style={{ width: '100%', height: 800 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={this.props.users}
                        layout="vertical"
                        barCategoryGap={100}
                        margin={{ top: 5, right: 30, left: 150, bottom: 5}}
                    >
                        <XAxis type="number" dataKey="follower_count" />
                        <YAxis type="category" dataKey="screen_name" tick={{fontSize: 18}} />
                        <CartesianGrid strokeDasharray="1 1" />
                        {/* <ReferenceLine y={0.5} stroke="#000" /> */}
                        <Tooltip />
                        <Legend />

                        <Bar dataKey="follower_count" fill="#002868"  /> {/* label={<CustomizedLabel />} */}

                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }

    componentDidMount(){
        console.log("BAR CHART DID MOUNT")
    }

    componentDidUpdate(prevProps) {
        console.log("BAR CHART DID UPDATE")
    }

}
