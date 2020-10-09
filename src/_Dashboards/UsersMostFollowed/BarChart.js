import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

import cachedData from './data.js'
import BarChart from './BarChart.js'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class Dashboard extends PureComponent {
  //constructor(props) {
  //  super(props)
  //  //this.state = {limit: 500, parsedResponse: null} // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
  //  //this.fetchData = this.fetchData.bind(this)
  //}

  render() {
    var rows = this.props.users.map(function(user){
      return <li>@{user["screen_name"]}: {user["avg_score_lr"]} ({user["follower_count"]})</li>
    })

    return (
       <ol>
        {rows}
       </ol>
    )
  }

  componentDidMount(){
    console.log("BAR CHART DID MOUNT")
  }

  componentDidUpdate(prevProps) {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // invoked immediately after updating occurs. This method is not called for the initial render

    // Typical usage (don't forget to compare props):
    //if (this.props.userID !== prevProps.userID) {
    //  this.fetchData(this.props.userID);
    //}

    console.log("BAR CHART DID UPDATE")
  }

}
