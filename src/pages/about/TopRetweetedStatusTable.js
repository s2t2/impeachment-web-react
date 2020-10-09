

import React from 'react';

export default function StatusesTable(props) {
  //console.log("METRIC", props.metric)
  //var columnName;
  //if(props.metric === 'retweet_count'){
  //  columnName = "Retweet Count"
  //} else if (props.metric === 'retweeter_count'){
  //  columnName = "Bot Count"
  //}

  var rank = 0
  //console.log("PROPS", this.props)
  var tableRows = props.statuses.map(function (s) {
    rank = rank + 1
    return (
      <tr>
        <td>{rank}</td>
        <td>{s["status_text"]}</td>
        <td><code>{s["retweeter_count"]}</code></td>
      </tr>
    )
  });

  return (
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Status Text</th>
            <th scope="col">Retweeter Count</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};
