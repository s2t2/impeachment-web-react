

import React from 'react';
import { ReactComponent as UpArrow } from './arrow-upright.svg';

import { format } from 'date-fns'

export default function StatusesTable(props) {
  //{
  //   "created_at":"Wed, 22 Jan 2020 01:08:33 GMT",
  //   "opinion_score":1,
  //   "status_id":"1219788909678383105",
  //   "status_text":"RT @AOC: \u201cNot me, Us\u201d means building a mass movement for social, economic, and racial justice.  And movement means we carry and care for on\u2026"
  // },

  //console.log("PROPS", this.props)
  var tableRows = props.statuses.map(function(s){

    var statusUrl = `https://twitter.com/politico/status/${s["status_id"]}`

    //debugger;
    //var date = Date.parse(s["created_at"])
    //var date = new strftime('%Y-%m-%d', s["created_at"])
    var date = format(Date.parse(s["created_at"]), 'yyyy-MM-dd')

    return (
      <tr>
        <td style={{"whiteSpace": "nowrap"}}>{date}</td>
        <td>
          {s["status_text"]}

          <a href={statusUrl}>
            <UpArrow style={{font: "14px sans-serif", marginLeft: "4px"}}/>
          </a>
        </td>
        <td><code>{s["opinion_score"]}</code></td>
        <td><code>Coming Soon...</code></td>
        <td><code>Coming Soon...</code></td>
      </tr>
    )
  });

  return (
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Status Text</th>
            <th scope="col">Opinon Score (LR)</th>
            <th scope="col">Opinon Score (NB)</th>
            <th scope="col">Opinon Score (NN)</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};
