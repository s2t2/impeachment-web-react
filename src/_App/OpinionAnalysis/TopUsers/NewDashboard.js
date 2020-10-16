
import React, { PureComponent } from 'react'
import queryString from 'query-string'

import NewChart from './NewChart'

import './NewDashboard.css'

export default class MyBarChart extends PureComponent {
    constructor(props) {
        super(props)

        let params = queryString.parse(window.location.search)
        var metric = params["metric"] || "avg_score_lr"
        var sort = params["sort"] || "DESC"
        var opinionMin = parseInt(params["opinionMin"]) || 0
        var opinionMax = parseInt(params["opinionMax"]) || 100
        var tweetMin = parseInt(params["tweetMin"]) || 5
        var categories = parseInt(params["categories"]) || ["ELECTED-OFFICIAL", "PARTY", "GOVERNMENT", "MAJOR-MEDIA-OUTLET", "MEDIA-OUTLET"]

        this.state = {metric: metric, sort: sort, opinionMin: opinionMin, opinionMax: opinionMax, tweetMin: tweetMin, categories: categories}
    }

    render() {
        return (
            <span>
                <NewChart/>
            </span>
        )
    }

    componentDidMount(){
        console.log("BAR CHART DID MOUNT")
    }

    componentDidUpdate(prevProps) {
        console.log("BAR CHART DID UPDATE")
    }

}
