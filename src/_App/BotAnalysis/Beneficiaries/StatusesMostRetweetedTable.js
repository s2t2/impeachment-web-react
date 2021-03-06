

import React from 'react'
import Table from 'react-bootstrap/Table'

import {formatNumber} from "../../Utils/Decorators"

export default function StatusesTable(props) {
    var {data} = props

    var rank = 0
    var tableRows = data.map(function(status) {
        rank = rank + 1
        return (
            <tr key={rank}>
                <td>{rank}</td>
                <td><i>{status["status_text"]}</i></td>
                <td>{formatNumber(status["bot_count"])}</td>
            </tr>
        )
    })

    return (
        <div className="table-responsive">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Status Text</th>
                        <th scope="col">Bot Count</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        </div>
    )
}
