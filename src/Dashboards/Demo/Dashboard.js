import React from 'react';
import Plot from 'react-plotly.js';
import Container from 'react-bootstrap/Container';

class Dashboard extends React.Component {
  constructor(props) {
    //console.log("[DASHBOARD CONSTRUCTOR]")
    console.log("PROPS:", props)

    super(props)
    this.state = { counter: 0 };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    var layout = {title: 'My Chart'} // width: 320, height: 240,
    var data = [{
      type: 'bar',
      x: [20, 14, 23],
      y: ['giraffes', 'orangutans', 'monkeys'],
      orientation: 'h'
    }];

    return (
       <Container className="Dashboard">
        <Plot className="Community-0" data={data} layout={layout}/>
        <Plot className="Community-1" data={data} layout={layout}/>
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

}


export default Dashboard;
