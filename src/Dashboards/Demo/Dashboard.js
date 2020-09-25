import React from 'react';
import Plot from 'react-plotly.js';

//import './Dashboard.css';

class MyChart extends React.Component {
  render() {
    //const layout = {width: 320, height: 240, title: 'A Fancy Plot'};
    //var data = [
    //    {
    //      x: [1, 2, 3],
    //      y: [2, 6, 3],
    //      type: 'scatter',
    //      mode: 'lines+markers',
    //      marker: {color: 'red'},
    //    },
    //    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
    //  ]

    var layout = {title: 'My Chart'} // width: 320, height: 240,

    var data = [{
      type: 'bar',
      x: [20, 14, 23],
      y: ['giraffes', 'orangutans', 'monkeys'],
      orientation: 'h'
    }];

    return (
      <Plot data={data} layout={layout}/>
    );
  }
}

function Dashboard() {
  return (
    <div className="Dashboard">
      <MyChart/>
    </div>
  );
}

export default Dashboard;
