import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/message/create" exact component={MessagesCreate} />
                <Route path="/message/list" exact component={MessagesList} />
            </Switch>
        </Router>
    )
}

export default App
