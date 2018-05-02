import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './containers/Home'
import NoMatch from './containers/NoMatch'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
