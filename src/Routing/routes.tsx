import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../Layout/layout';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import Counter from '../components/Counter';

export default (
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
            <Route path="counter" component={Counter} />
        </Route>
)