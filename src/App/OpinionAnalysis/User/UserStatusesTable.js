

import React from 'react'
import { format, compareAsc } from 'date-fns'
import Table from 'react-bootstrap/Table'

import { ReactComponent as UpArrow } from './arrow-upright.svg'

export default function UserStatusesTable(props) {
    var {data} = props

    var tableRows = data.sort(function(a, b){
        return compareAsc(Date.parse(a["created_at"]), Date.parse(b["created_at"]))
    })
    .map(function(status){
        var statusUrl = `https://twitter.com/politico/status/${status["status_id"]}`
        var date = format(Date.parse(status["created_at"]), 'yyyy-MM-dd')

        var bertScore
        if(status["score_bert"]){
            bertScore = status["score_bert"].toFixed(2)
        } else {
            bertScore = "N/A"
        }

        return (
            <tr key={status["status_id"]}>
                <td style={{"whiteSpace": "nowrap"}}>{date}</td>
                <td>
                    {status["status_text"]}

                    <a href={statusUrl}><UpArrow style={{font: "14px sans-serif", marginLeft: "4px"}}/></a>
                </td>
                <td><code>{status["score_lr"]}</code></td>
                <td><code>{status["score_nb"]}</code></td>
                <td><code>{bertScore}</code></td>
            </tr>
        )
    })

    return (
        <div className="table-responsive">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Status Text</th>
                        <th scope="col">Opinion Score (LR)</th>
                        <th scope="col">Opinion Score (NB)</th>
                        <th scope="col">Opinion Score (BERT)</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        </div>
    )
}
