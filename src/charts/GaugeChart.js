import React from 'react';
import GaugeChart from 'react-gauge-chart'



function ShowGaugeChart() {
    return (
        <GaugeChart id="gauge-chart2"
            nrOfLevels={20}
            percent={0.86}
            textColor="#000000"
        />
    );
}

export default ShowGaugeChart

