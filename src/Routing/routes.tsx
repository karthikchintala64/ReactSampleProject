import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from '../store';

import Layout from '../Layout/layout';
import Login from '../components/login';
import Home from '../containers/home';

import About from '../components/about';
import Contact from '../components/contact';
import CounterContainer from '../containers/Counter';

const history = syncHistoryWithStore(browserHistory, store);

export default (
    <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
            <Route path="counter" component={CounterContainer} />
        </Route>
    </Router>
)