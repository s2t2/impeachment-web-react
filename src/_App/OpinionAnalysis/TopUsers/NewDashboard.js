
import React, { PureComponent } from 'react'
import queryString from 'query-string'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import NewChart from './NewChart'
import Spinner from '../../Spinner.js'
import cachedData from './data.js'
import './NewDashboard.css'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"
const CACHE_MODE = process.env.REACT_APP_CACHE_MODE || true // TODO: convert env var to bool

export default class Dashboard extends PureComponent {
    constructor(props) {
        super(props)

        let params = queryString.parse(window.location.search)
        var metric = params["metric"] || "avg_score_lr"
        var sort = params["sort"] || "DESC"
        var opinionMin = parseInt(params["opinionMin"]) || 0
        var opinionMax = parseInt(params["opinionMax"]) || 100
        var tweetMin = parseInt(params["tweetMin"]) || 5
        var categories = parseInt(params["categories"]) || ["ELECTED-OFFICIAL", "PARTY", "GOVERNMENT", "MAJOR-MEDIA-OUTLET", "MEDIA-OUTLET"]

        this.state = {
            limit: 1000,
            parsedResponse: null,
            chartOptions: {metric: metric, sort: sort, opinionMin: opinionMin, opinionMax: opinionMax, tweetMin: tweetMin, categories: categories}
        }
    }

    render() {
        var chartData = this.state.parsedResponse
        var chartOptions = this.state.chartOptions

        var spinIntoStuff = <Spinner/>
        if (chartData) {
            console.log("USER CHART DATA:", chartData)
            spinIntoStuff = <NewChart users={chartData} options={chartOptions}/>
        }

        return (
            <Container fluid>
                <Card>
                    {spinIntoStuff}
                </Card>
            </Container>
        )
    }

    fetchData(){
        var requestUrl = `${API_URL}/api/v1/users_most_followed?limit=${this.state.limit}`
        console.log("REQUEST URL:", requestUrl)
        fetch(requestUrl)
            .then(function(response) {
                //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
                return response.json()
            })
            .then(function(json){
                console.log("FETCHED", json.length, "ITEMS")
                this.setState({parsedResponse: json})
            }.bind(this))
            .catch(function(err){
                console.error("FETCH ERR", err)
            })
    }

    componentDidMount(){
        console.log("DASHBOARD DID MOUNT")
        if (CACHE_MODE) {
            this.setState({parsedResponse: cachedData})
        } else {
            this.fetchData()
        }
    }

    componentDidUpdate(prevProps) {
        console.log("DASHBOARD DID UPDATE")
    }

}
