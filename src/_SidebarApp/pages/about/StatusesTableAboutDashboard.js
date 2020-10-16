import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import { orderBy } from 'lodash';
import CustomLoader from "./CustomLoader"

import TopRetweetedStatusTable from './TopRetweetedStatusTable';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { metric: "retweeter_count", parsedResponse: null }; // metric should be "retweet_count" or "retweeter_count" (see API docs)
    this.fetchData = this.fetchData.bind(this);
  }

  render() {
    var spinIntoTables;
    if (this.state.parsedResponse) {
      var statuses = this.state.parsedResponse;
      var metric = this.state.metric

      var community0 = orderBy(statuses.filter(function (u) { return u["community_id"] === 0 }), metric, "desc")
      var community1 = orderBy(statuses.filter(function (u) { return u["community_id"] === 1 }), metric, "desc")

      spinIntoTables = <span>
        <p class="lead">Statuses Most Retweeted by Left-leaning Bots</p>
        <TopRetweetedStatusTable statuses={community0} metric={metric} />

        <p class="lead">Statuses Most Retweeted by Right-leaning Bots</p>
        <TopRetweetedStatusTable statuses={community1} metric={metric} />
      </span>
    } else {
      spinIntoTables = <div class="d-flex align-items-center min-vh-90">
        <div class="container text-center">
          <CustomLoader />
        </div>
      </div>
    };

    return (
      <Container fluid>
        {spinIntoTables}
      </Container>
    );
  }

  componentDidMount() {
    console.log("DASHBOARD DID MOUNT")
    this.fetchData()
  }

  fetchData() {
    var requestUrl = `${API_URL}/api/v0/statuses_most_retweeted?limit=10&metric=${this.state.metric}`
    console.log("REQUEST URL:", requestUrl)
    fetch(requestUrl)
      .then(function (response) {
        //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
        return response.json()
      })
      .then(function (json) {
        console.log("FETCHED", json.length, "ITEMS")
        this.setState({ parsedResponse: json })
      }.bind(this))
      .catch(function (err) {
        console.error("FETCH ERR", err)
      })
  }

};
