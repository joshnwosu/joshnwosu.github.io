import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './views/Intro'

import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Intro} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
