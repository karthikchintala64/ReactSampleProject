import * as React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import {store} from '../Store/store';

import Layout from '../Layout/layout';
import Home from '../Home/home';
import About from '../About/about';
import Contact from '../Contact/contact';



const history = syncHistoryWithStore(browserHistory, store);

export default class RootRouter extends React.Component<any, any>{
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>

        )
    }
}