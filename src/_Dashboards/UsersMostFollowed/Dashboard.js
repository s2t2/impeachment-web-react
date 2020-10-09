import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

import cachedData from './data.js'
import BarChart from './VBarChart.js'
import List from './List.js'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

export default class Dashboard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {limit: 500, parsedResponse: null} // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
        this.fetchData = this.fetchData.bind(this)
    }

    render() {
        var spinIntoStuff
        if (this.state.parsedResponse) {
            var users = this.state.parsedResponse
            console.log("USERS MOST FOLLOWED:", users.length)

            spinIntoStuff = <span>
                <BarChart users={users}/>
                <List users={users}/>
            </span>
        } else {
            spinIntoStuff = <Spinner animation="grow" />
        }

        return (
            <Container className="Dashboard">
                <h3>Mean Opinion Scores for Users Tweeting about Trump Impeachment</h3>
                {spinIntoStuff}
            </Container>
        )
    }

    componentDidMount(){
        console.log("DASHBOARD DID MOUNT")
        this.fetchData()
    }

    fetchData(){
        var requestUrl = `${API_URL}/api/v1/users_most_followed/${this.state.limit}`
        console.log("REQUEST URL:", requestUrl)
        //fetch(requestUrl)
        //  .then(function(response) {
        //    //console.log("RAW RESPONSE", "STATUS", response.status, response.statusText, response.ok, "HEADERS", response.headers, response.url)
        //    return response.json()
        //  })
        //  .then(function(json){
        //    console.log("FETCHED", json.length, "ITEMS")
        //    this.setState({parsedResponse: json})
        //  }.bind(this))
        //  .catch(function(err){
        //    console.error("FETCH ERR", err)
        //  })

        return this.setState({parsedResponse: cachedData})
    }

}
