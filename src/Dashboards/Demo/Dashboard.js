import React from 'react';
import Plot from 'react-plotly.js';
import Container from 'react-bootstrap/Container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    //console.log("[DASHBOARD CONSTRUCTOR]")
    //console.log("PROPS:", props)

    //this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    var layout0 = {width: 400, height: 300, title: 'Users Most Retweeted (Community 0)'}
    var layout1 = {width: 400, height: 300, title: 'Users Most Retweeted (Community 1)'} // TODO: red

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

    return (
       <Container className="Dashboard">
        <h3>Demo Dashboard</h3>
        <Plot className="Community-0-Chart" data={data0} layout={layout0}/>
        <Plot className="Community-1-Chart" data={data1} layout={layout1}/>
      </Container>
    );
  }

  componentDidMount(){
    // https://reactjs.org/docs/react-component.html#componentdidmount
    // invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    console.log("[DASHBOARD DID MOUNT]")
  }

  componentDidUpdate(prevProps) {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // invoked immediately after updating occurs. This method is not called for the initial render

    // Typical usage (don't forget to compare props):
    //if (this.props.userID !== prevProps.userID) {
    //  this.fetchData(this.props.userID);
    //}

    console.log("[DASHBOARD DID UPDATE]")
  }

  //fetchData(){
  //
  //  var serverURL = "localhost:8899" // TODO: set via env var
  //  var requestURL = `${serverUrl}/api/v0/`
  //
  //  fetch(requestURL)
  //    .then(function(response) {
  //      console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
  //      return response.json()
  //    })
  //    .then(function(json){
  //      console.log("PARSED RESPONSE BODY", json)
  //      //this.setState({chartData: json.results}) // displaySpinner:false,
  //      this.setState({responseData: [{"user": "1"}, {"user": "2"}, {"user": "3"}]}) // displaySpinner:false,
  //    }.bind(this))
  //    .catch(function(err){
  //      console.error("FETCH ERR", err) // alert... There was an issue fetching schedule results from the server. Please try again, or contact the developer if the issue persists."
  //    })
  //}
}

export default Dashboard;
