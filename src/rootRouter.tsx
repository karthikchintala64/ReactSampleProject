import * as React from 'react';
import {Router, Route, IndexRoute, Link,browserHistory} from 'react-router';

import Layout from './Layout/layout';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';

export default class RootRouter extends React.Component<any, any>{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="about" component={About}/>
                    <Route path="contact" component={Contact}/>
                </Route>
            </Router>
        )
    }
}