import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Home } from '../pages'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route to="/" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default App
