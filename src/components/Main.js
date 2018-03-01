import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import Ideas from './Ideas'
import FriendsPage from './FriendsPage'

class Main extends Component {

/*the Main\ page could either be:
1) login/logout,
2) dashboard
3) Idea:
  create idea
  show idea
  update idea
4) Event:
  create events
  show event
  update event
5) my friends
6) Profile
  other's Profile
7) Edit my Profile

*/


  render() {
    return(
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/ideas/' component={Ideas}/>
          <Route exact path='/friends' component={FriendsPage}/>
        </Switch>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    ideas: state.ideas,
    friends: state.friends
  }
}


export default withRouter(connect(mapStateToProps, null)(Main))
