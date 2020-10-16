
import React from 'react'
//import {VictoryChart, VictoryBar, VictoryAxis, VictoryLegend} from 'victory' // VictoryLabel
//import {scaleSequential, interpolateRdBu} from 'd3'
//import { orderBy } from 'lodash'

import './NewDashboard.css'

//const colorScale = scaleSequential(interpolateRdBu).domain([1, 0]) // reverse so 0:blue and 1:red

//function formatBigNumber(num) {
//    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
//} // adds "K" for thousands h/t: https://stackoverflow.com/a/9461657

const OPINION_MODEL_NAMES = {"avg_score_lr": "Logistic Regression", "avg_score_nb": "Naive Bayes", "avg_score_bert": "BERT Transformer"}
const ALL_CATEGORIES = ["ELECTED-OFFICIAL", "PARTY", "GOVERNMENT", "MAJOR-MEDIA-OUTLET", "MEDIA-OUTLET"]

export default function NewChart(props) {

    //
    // CHART OPTIONS
    //

    var categories = props["categories"] || ALL_CATEGORIES
    var tweetMin = parseInt(props["tweetMin"]) || 5
    var opinionMin = parseInt(props["opinionMin"]) || 0
    var opinionMax = parseInt(props["opinionMax"]) || 100
    //var opinionRange = [opinionMin, opinionMax]

    var opinionMetric = props["metric"] || "avg_score_lr"
    var opinionModel = OPINION_MODEL_NAMES[opinionMetric]
    var sortMetric = "Mean Opinion Score"
    var sortOrder = props["sort"] || "DESC"
    var barCount = 10 // would be nice to get 15 or 20 to work (with smaller bar labels)


    //
    // CHART DATA
    //

    var chartTitle = "Users Tweeting about Trump Impeachment"
    var chartFooter = `Chart shows users tweeting at least ${tweetMin} times about Trump Impeachment`
        chartFooter += ` whose mean opinion score is between ${opinionMin}% and ${opinionMax}%`
        chartFooter += ` (as scored by our ${opinionModel} opinion model).`
        //chartFooter += ` .`
        //chartFooter += ` sorted by ${sortMetric}`
        //chartFooter += ` Includes only users categorized as: ${categories}`

    //var users = props["users"]
    //    .filter(function(user){
    //        return (user["status_count"] >= tweetMin
    //            && user[opinionMetric] * 100.0 >= opinionMin
    //            && user[opinionMetric] * 100.0 <= opinionMax
    //            && categories.includes(user["category"])
    //    )})
    //    .map(function(user){
    //        user["handle"] = `@${user['screen_name']}`
    //        user["scorePct"] = (user[opinionMetric] * 100.0).toFixed(1) + "%"
    //        return user
    //    })
    //    .sort(function(a, b){
    //        return a["follower_count"] - b["follower_count"] // chart wants this order
    //    }) // sort before slice
    //    .slice(-barCount) // negative number takes last X users (which is actually the top X users)

    return (
        <span>
            <p className="app-center chart-title-p" style={{marginTop:10, marginBottom:0}}>{chartTitle}</p>
            <h4 className="app-center chart-title-h4" style={{marginTop:10, marginBottom:0}}>{chartTitle}</h4>

            <p style={{marginLeft:30, marginRight:30}}>{chartFooter}</p>
        </span>
    )
}
