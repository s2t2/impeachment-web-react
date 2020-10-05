import React, { PureComponent } from 'react';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Table from './Table';

import './Dashboard.css';
import { ReactComponent as UpArrow } from './arrow-upright.svg';

export default class Dashboard extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {screen_name: "politico", parsedResponse: null};
    //this.fetchData = this.fetchData.bind(this);
  }

  render() {
    //var spinIntoCharts;

    return (
      <Container className="Dashboard" style={{"marginTop": "2em"}}>
        <div id="content">

          <header class="row">
            <span class="col-md-8">
              <h1 style={{"display": "inline-block"}}>@POLITICO</h1>

              <a style={{"display": "inline-block"}} href="https://twitter.com/politico">
                <UpArrow/>
              </a>
            </span>
            <span class="col-md-4">
                <div id="opinion-meter"></div>

            </span>
          </header>

          <p class="lead">Mean Opinion Score: <code>XX.YY%</code></p>

          <div class="chart-gauge"></div>

          <Table/>

        </div>
      </Container>
    );
  }

  componentDidMount(){
    console.log("DASHBOARD DID MOUNT")
    this.fetchData()
  }

  fetchData(){






  }
}
