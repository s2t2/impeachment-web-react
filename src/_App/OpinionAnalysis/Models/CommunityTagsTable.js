

import React from 'react'
import Table from 'react-bootstrap/Table'

export default function CommunityTagsTable(props) {
    var {data} = props

    var tableRows = data.map(function(tag) {
        return (
            <tr key={tag["tag"]}>
                <td><i>{tag["tag"]}</i></td>
                <td>{tag["description"]}</td>
            </tr>
        )
    })

    return (
        <div className="table-responsive">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th scope="col">Hashtag</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        </div>
    )
}
