

import React from 'react';

import { ReactComponent as UpArrow } from './arrow-upright.svg';

function Table() {
  return (
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Status Text</th>
            <th scope="col">Opinion Score</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td style={{"whiteSpace": "nowrap"}} >2020-01-01</td>
            <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                <a href="https://twitter.com/politico/status/1305159530360209410">
                  <UpArrow/>
                </a>
            </td>
            <td><code>0</code></td>
          </tr>

          <tr>
            <td style={{"whiteSpace": "nowrap"}} >2020-01-01</td>
            <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                <a href="https://twitter.com/politico/status/1305159530360209410">
                 <UpArrow/>
                </a>
            </td>
            <td><code>0</code></td>
          </tr>


          <tr>
            <td style={{"whiteSpace": "nowrap"}} >2020-01-01</td>
            <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                <a href="https://twitter.com/politico/status/1305159530360209410">
                  <UpArrow/>
                </a>
            </td>
            <td><code>0</code></td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Table;
