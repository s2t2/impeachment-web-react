import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import { meanBy } from 'lodash'

import { ReactComponent as UpArrow } from './arrow-upright.svg'
import GaugeChart from 'react-gauge-chart'
import StatusesTable from './StatusesTable.js'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {screen_name: "politico", parsedResponse: null} // TODO: get screen name from input box or URL params ?screen_name=BERNIESANDERS
    this.fetchData = this.fetchData.bind(this)
  }

  render() {
    var spinIntoStuff
    if (this.state.parsedResponse) {
        var statuses = this.state.parsedResponse
        var score = meanBy(statuses, (s) => s["opinion_score"])
        console.log("STATUSES:", statuses.length, "SCORE:", score)

        var profileUrl = `https://twitter.com/${this.state.screen_name}`

        spinIntoStuff = <span>
          <h3>
            {`@${this.state.screen_name.toUpperCase()}`}
            <a href={profileUrl}>
              <UpArrow style={{font: "14px sans-serif", marginLeft: "4px"}}/>
            </a>
          </h3>

          <p class="lead">Mean Opinion Score: <code>{score.toFixed(4)}</code></p>

          <GaugeChart id="neccessary" style={{width: "400px", height:"180px", margin: "10px auto"}}
            arcsLength={[0.3, 0.4, 0.3]}
            colors={["steelblue", "#ccc", "#D62021"]}
            percent={score}
            arcPadding={0.03}
            cornerRadius={0}
            hideText={true}
          />

          <StatusesTable statuses={statuses}/>
        </span>

    } else {
        spinIntoStuff = <Spinner animation="grow" />
    }

    return (
       <Container className="Dashboard">
        {spinIntoStuff}
      </Container>
    )
  }

  componentDidMount(){
    console.log("DASHBOARD DID MOUNT")
    this.fetchData()
  }

  fetchData(){
    var requestUrl = `${API_URL}/api/v0/user_tweets/${this.state.screen_name}`
    console.log("REQUEST URL:", requestUrl)
    fetch(requestUrl)
      .then(function(response) {
        //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
        return response.json()
      })
      .then(function(json){
        console.log("FETCHED", json.length, "ITEMS")
        this.setState({parsedResponse: json})
      }.bind(this))
      .catch(function(err){
        console.error("FETCH ERR", err)
      })
  }

}
