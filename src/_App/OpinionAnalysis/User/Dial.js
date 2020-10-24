
import React from 'react'
import GaugeChart from 'react-gauge-chart'

import {legendBlue, legendNeutral, legendRed} from "../../Utils/Colors"

export default function Dial(props) {

  return (
    <div>
        <p>Opinion Meter {props.score}</p>

        <GaugeChart id="required" style={{height: "500px", width: "600px", margin: "10px auto"}}
            arcsLength={[0.3, 0.4, 0.3]}
            colors={[legendBlue, legendNeutral, legendRed]}
            percent={props.score}
            arcPadding={0.03}
            cornerRadius={0}
        />

    </div>
  )
}
