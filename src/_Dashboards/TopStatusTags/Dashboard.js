import React from 'react'
import Plot from 'react-plotly.js'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import { orderBy } from 'lodash'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

const COLORS = {"blue": "steelblue", "red": '#D62021'}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {parsedResponse: null }
    this.fetchData = this.fetchData.bind(this)
  }

  render() {
    var spinIntoCharts;
    if (this.state.parsedResponse) {
        var tags = this.state.parsedResponse;

        var community0 = orderBy(tags.filter(function(t){return t["community_id"] === 0}), "count", "asc")
        var community1 = orderBy(tags.filter(function(t){return t["community_id"] === 1}), "count", "asc")

        var x0 = community0.map(function(u){ return u["count"]})
        var x1 = community1.map(function(u){ return u["count"]})

        var y0 = community0.map(function(u){ return u["token"]})
        var y1 = community1.map(function(u){ return u["token"]})

        var data0 = [{type: 'bar', x: x0, y: y0, orientation: 'h', marker: {color: COLORS["blue"]}}];
        var data1 = [{type: 'bar', x: x1, y: y1, orientation: 'h', marker: {color: COLORS["red"]}}];

        var layout0 = {title: 'Top Hashtags in Left-leaning Bot Tweets',
          height: 600, // width: 600,
        }
        var layout1 = {title: 'Top Hashtags in Right-leaning Bot Tweets',
          height: 600 //, width: 600,
        }

        var plotConfig = {displayModeBar: false}

        spinIntoCharts = <span className="chart-row">
          <Plot className="Community-0-Chart" data={data0} layout={layout0} config={plotConfig}/>
          <Plot className="Community-1-Chart" data={data1} layout={layout1} config={plotConfig}/>
        </span>
    } else {
        spinIntoCharts = <Spinner animation="grow" />
    };

    return (
       <Container className="Dashboard">
        {spinIntoCharts}
      </Container>
    );
  }

  componentDidMount(){
    console.log("DASHBOARD DID MOUNT")
    this.fetchData()
  }

  fetchData(){
    var requestUrl = `${API_URL}/api/v0/top_status_tags?limit=20`
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

};
