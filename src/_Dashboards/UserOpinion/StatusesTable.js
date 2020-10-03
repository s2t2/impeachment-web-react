

import React from 'react';
import { ReactComponent as UpArrow } from './arrow-upright.svg';

import { format, compareAsc } from 'date-fns'

export default function StatusesTable(props) {

  var tableRows = props.statuses.sort(function(a, b){
    return compareAsc(Date.parse(a["created_at"]), Date.parse(b["created_at"]))
  }).map(function(s){
    var statusUrl = `https://twitter.com/politico/status/${s["status_id"]}`
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
