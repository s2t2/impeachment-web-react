import React, { PureComponent } from 'react'
//import Container from 'react-bootstrap/Container'

import Spinner from '../../Spinner.js'
import BarChart from './VBarChart.js'
//import List from './List.js'
import cachedData from './data.js'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"
const CACHE_MODE = process.env.REACT_APP_CACHE_MODE || true // TODO: convert env var to bool

export default class Dashboard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {limit: 1000, parsedResponse: null}
        this.fetchData = this.fetchData.bind(this)
    }

    render() {
        var spinIntoStuff = <Spinner />
        if (this.state.parsedResponse) {
            var users = this.state.parsedResponse
            //console.log("USERS MOST FOLLOWED:", users.length)
            spinIntoStuff = <BarChart users={users}/>
        }

        return (
            <span>
                {spinIntoStuff}
            </span>
        )
    }

    componentDidMount(){
        console.log("DASHBOARD DID MOUNT")
        if (CACHE_MODE) {
            this.setState({parsedResponse: cachedData})
        } else {
            this.fetchData()
        }
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

}
