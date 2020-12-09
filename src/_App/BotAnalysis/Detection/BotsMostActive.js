


import React from 'react'
import Table from 'react-bootstrap/Table'

import {formatNumber, formatPct} from '../../Utils/Decorators'
import cachedData from './data.js'

export default function BotsMostActive() {

    const bots = cachedData

    var rank = 0
    const botRows = bots.slice(0,15).map(function(bot){
        rank += 1

        var screenNames =  bot["screen_names"].split(" | ")
        //var links = screenNames.map(function(sn){
        //    return <a href={`http://twitter.com/${sn}`}>{`@${sn}`}</a>
        //})

        var rtPct = bot["rt_count"] / bot["status_count"]

        return (
            <tr key={bot["user_id"]}>
                <td>{rank}</td>
                <td>
                    {   screenNames
                            .map(sn => <a href={`http://twitter.com/${sn}`}>{`@${sn}`}</a>)
                            .reduce((prev, curr) => [prev, ' | ', curr])
                    }
                </td>
                <td className="text-right">{formatNumber(bot["status_count"])}</td>
                <td className="text-right">{formatNumber(bot["rt_count"])}</td>
                <td className="text-right">{formatPct(rtPct)}</td>
                <td className="text-right">{formatPct(bot["avg_score_bert"])}</td>
            </tr>
        )
    })

    return (
        <div className="table-responsive">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Bot Screen Name(s)</th>
                        <th scope="col">Tweet Count</th>
                        <th scope="col">Retweet Count</th>
                        <th scope="col">Retweet Percentage</th>
                        <th scope="col">Mean Pro-Trump Opinion Score (BERT)</th>
                    </tr>
                </thead>
                <tbody>
                    {botRows}
                </tbody>
            </Table>
        </div>
    )
}
