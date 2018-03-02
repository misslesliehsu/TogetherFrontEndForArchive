import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import Ideas from './Ideas'
import FriendsPage from './FriendsPage'
import LoginSignup from './LoginSignup'
import Profile from './Profile'
import authorize from '../AuthHOC'


class Main extends Component {

  render() {
    const AuthDashboard = authorize(Dashboard)
    const AuthIdeas = authorize(Ideas)
    const AuthFriendsPage = authorize(FriendsPage)
    const AuthProfile = authorize(Profile)
    return(
      <div>
        <Switch>
          <Route exact path='/login' component={LoginSignup}/>
          <Route exact path='/dashboard' component={AuthDashboard}/>
          <Route path='/ideas' component={AuthIdeas}/>
          <Route path='/events' component={AuthIdeas}/>
          <Route exact path='/friends' component={AuthFriendsPage}/>
          <Route exact path='/MyProfile' component={AuthProfile}/>
        </Switch>
      </div>
    )
  }
}


export default withRouter(connect(null, null)(Main))
