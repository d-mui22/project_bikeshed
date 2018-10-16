import React from 'react'
import ReactDom from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import BikeShowContainer from '../containers/BikeShowContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/bikes/:id" component={BikeShowContainer}/>
      </Router>
    </div>
  )
}

export default App;
