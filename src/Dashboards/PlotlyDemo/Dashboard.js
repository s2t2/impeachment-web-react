import React from 'react';
import Plot from 'react-plotly.js';
import Container from 'react-bootstrap/Container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    var layout0 = {width: 400, height: 300, title: 'Users Most Retweeted by Community 0'}
    var layout1 = {width: 400, height: 300, title: 'Users Most Retweeted by Community 1'} // TODO: red

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
        <h3>Demo Chart</h3>
        <Plot className="Community-0-Chart" data={data0} layout={layout0}/>
        <Plot className="Community-1-Chart" data={data1} layout={layout1}/>
      </Container>
    );
  }
}

export default Dashboard;
