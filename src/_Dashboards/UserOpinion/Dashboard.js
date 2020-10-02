import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
//import moment from 'moment'
//import { orderBy } from 'lodash';

import StatusesTable from './StatusesTable.js';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {screen_name: "politico", parsedResponse: null}
    this.fetchData = this.fetchData.bind(this)
  }

  render() {
    var spinIntoStuff
    if (this.state.parsedResponse) {
        var statuses = this.state.parsedResponse






        //debugger;

        // moment(statuses[0]["created_at"]).format("YYYY-MM-DD")



        spinIntoStuff = <span>
          <h3>@{this.state.screen_name}</h3>
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
