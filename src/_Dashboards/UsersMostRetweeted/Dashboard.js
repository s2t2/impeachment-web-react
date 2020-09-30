import React from 'react';
import Plot from 'react-plotly.js';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { orderBy } from 'lodash';
//import dotenv from 'dotenv'

//dotenv.config()

var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { metric: "retweet_count", parsedResponse: null }; // metric should be "retweet_count" or "retweeter_count" (see API docs). keep track of what it is so we can chart appropriately. use can update via a dropdown if desired
    this.fetchData = this.fetchData.bind(this);
  }

  render() {
    var spinIntoCharts;
    if (this.state.parsedResponse) {
        var users = this.state.parsedResponse;
        var metric = this.state.metric

        var community0 = orderBy(users.filter(function(u){return u["community_id"] === 0}), metric, "asc")
        var community1 = orderBy(users.filter(function(u){return u["community_id"] === 1}), metric, "asc")

        var x0 = community0.map(function(u){ return u[metric]})
        var x1 = community1.map(function(u){ return u[metric]})

        var y0 = community0.map(function(u){ return u["retweeted_user_screen_name"]})
        var y1 = community1.map(function(u){ return u["retweeted_user_screen_name"]})

        var colors = {"blue": "steelblue", "red": '#D62021'};

        var data0 = [{type: 'bar', x: x0, y: y0, orientation: 'h', marker: {color: colors["blue"]}}];
        var data1 = [{type: 'bar', x: x1, y: y1, orientation: 'h', marker: {color: colors["red"]}}];

        var layout0 = {title: 'Users Most Retweeted by Left-leaning Bots',
          height: 450, // width: 600,
        }
        var layout1 = {title: 'Users Most Retweeted by Right-leaning Bots',
          height: 450 //, width: 600,
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
    // https://reactjs.org/docs/react-component.html#componentdidmount
    // invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    console.log("DASHBOARD DID MOUNT")
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // invoked immediately after updating occurs. This method is not called for the initial render

    // Typical usage (don't forget to compare props):
    //if (this.props.userID !== prevProps.userID) {
    //  this.fetchData(this.props.userID);
    //}

    console.log("DASHBOARD DID UPDATE")
  }

  fetchData(){
    var requestUrl = `${API_URL}/api/v0/users_most_retweeted?limit=10&metric=${this.state.metric}`
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

export default Dashboard;
