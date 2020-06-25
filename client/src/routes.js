import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import NewBook from './pages/NewBook'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/new" component={NewBook} />
                <Route exact path="/" component={Home} />

                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
}
