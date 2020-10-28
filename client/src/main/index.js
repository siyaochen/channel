import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MessagesList, MessagesCreate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/message/create" exact component={MessagesCreate} />
                <Route path="/message/list" exact component={MessagesList} />
            </Switch>
        </Router>
    )
}

export default App
