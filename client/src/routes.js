import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import NewBook from './pages/NewBook'
import Category from './pages/Category'

import history from './services/history'

export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/books/category/:category?" component={Category} />
                <Route path="/books/add" component={NewBook} />
                <Route exact path="/" component={Home} />

                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
}
