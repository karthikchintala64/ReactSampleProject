import * as React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import {store} from '../Store/store';


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