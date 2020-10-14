
import React from 'react'

import communityTags from './data'

export default function CommunityTagsTable() {

    var rows = communityTags.map(function(tag){
        return (
            <tr>
                <td>{tag["community_id"]}</td>
                <td><i>{tag["tag"]}</i></td>
                <td>{tag["description"]}</td>
            </tr>
        )
    })

    return (
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Bot Community</th>
                    <th scope="col">Hashtag</th>
                    <th scope="col">Description / Explanation</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
