

import React from 'react';

export default class StatusesTable extends React.Component {
  render() {
    //console.log("PROPS", this.props)
    var tableRows = this.props.statuses.map(function(s){
      return (
        <tr>
          <td>{s["retweeted_user_screen_name"]}</td>
          <td>{s["status_text"]}</td>
          <td><code>{s["retweet_count"]}</code></td>
        </tr>
      )
    })

    return (
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Retweeted User</th>
              <th scope="col">Status Text</th>
              <th scope="col">Retweet Count</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}
