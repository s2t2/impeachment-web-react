import React, { PureComponent } from 'react'


export default class List extends PureComponent {
  //constructor(props) {
  //  super(props)
  //  //this.state = {limit: 500, parsedResponse: null} // TODO: get screen name from input box or URL params (maybe use window.location.href and split it, or find some kind of react router property)
  //  //this.fetchData = this.fetchData.bind(this)
  //}

  render() {
    var rows = this.props.users.map(function(user){
      var scorePct = (user["avg_score_lr"] * 100.0).toFixed(1) + "%"
      var userHandle = "@" + user["screen_name"]
      var followerCount = user["follower_count"]

      return <li key={userHandle}> {userHandle} |  {followerCount} | ({scorePct}) </li>
    })

    return (
       <ol>
        {rows}
       </ol>
    )
  }

  componentDidMount(){
    console.log("LIST DID MOUNT")
  }

  componentDidUpdate(prevProps) {
    console.log("LIST DID UPDATE")
  }

}
