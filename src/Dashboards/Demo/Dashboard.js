import React from 'react';
import Plot from 'react-plotly.js';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { parsedResponse: null };
    this.fetchData = this.fetchData.bind(this);
  }

  render() {
    //var layout0 = {width: 400, height: 300, title: 'Users Most Retweeted by Community 0'}
    //var layout1 = {width: 400, height: 300, title: 'Users Most Retweeted by Community 1'} // TODO: red
    //var data0 = [{
    //  type: 'bar',
    //  x: [10, 20, 30],
    //  y: ['User A', 'User B', 'User C'],
    //  orientation: 'h'
    //}];
    //var data1 = [{
    //  type: 'bar',
    //  x: [5, 10, 50],
    //  y: ['User X', 'User Y', 'User Z'],
    //  orientation: 'h'
    //}];

    //console.log("ACCESSING FROM RENDER...", this.state.parsedResponse)

    var spinIntoCharts;
    if (this.state.parsedResponse) {

        var layout0 = {width: 400, height: 300, title: 'Users Most Retweeted by Community 0'}
        var layout1 = {width: 400, height: 300, title: 'Users Most Retweeted by Community 1'} // TODO: red

        var response0 = this.state.parsedResponse.filter(function(u){ return u["community_id"] === 0})
        var response1 = this.state.parsedResponse.filter(function(u){ return u["community_id"] === 1})

        var data0 = [{
          type: 'bar',
          x: [10, 20, 30],
          y: ['User A', 'User B', 'User C'],
          orientation: 'h'
        }];
        var data1 = [{
          type: 'bar',
          x: [5, 10, 50],
          y: ['User X', 'User Y', 'User Z'],
          orientation: 'h'
        }];

        spinIntoCharts = <span className="chart-row">
          <Plot className="Community-0-Chart" data={data0} layout={layout0}/>
          <Plot className="Community-1-Chart" data={data1} layout={layout1}/>
        </span>
    } else {
        spinIntoCharts = <Spinner animation="grow" />
    };

    return (
       <Container className="Dashboard">
        <h3>Demo Dashboard</h3>
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
    var API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"
    var requestUrl = `${API_URL}/api/v0/users_most_retweeted?limit=10`
    console.log("REQUEST URL:", requestUrl)
    fetch(requestUrl)
      .then(function(response) {
        console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
        return response.json()
      })
      .then(function(json){
        console.log("PARSED RESPONSE BODY", json)
        this.setState({parsedResponse: json, displaySpinner: false})
      }.bind(this))
      .catch(function(err){
        console.error("FETCH ERR", err)
      })
  }
}

export default Dashboard;
