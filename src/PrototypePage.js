import React from 'react';

import Nav from './PrototypeNav';
import Table from './PrototypeTable';
import Footer from './PrototypeFooter';

function PrototypePage() {
  return (
    <div className="prototype-page">

      <Nav/>

      <div class="container" style={{"marginTop": "2em"}}>
        <div id="content">

           <header class="row">
              <span class="col-md-8">
                <h1 style={{"display": "inline-block"}}>@POLITICO</h1>

                <a style={{"display": "inline-block"}} href="https://twitter.com/politico">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M5.172 10.828a.5.5 0 0 0 .707 0l4.096-4.096V9.5a.5.5 0 1 0 1 0V5.525a.5.5 0 0 0-.5-.5H6.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                  </svg>
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
      </div>

      <Footer/>

    </div>
  );
}

export default PrototypePage;
