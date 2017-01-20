import * as React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';

import routes from './routes';
import {store} from '../store';
import * as authActions from '../actions/authactions';



export default class RootRouter extends React.Component<any, any>{

    componentWillMount(){
        if(window.location.hash.indexOf('#id_token')>-1){
            store.dispatch(authActions.GetAccessToken())
        }
        else if(window.location.hash.indexOf('#access_token')>-1){
            localStorage.setItem('access-token',window.location.hash.split('=')[1].split('&')[0]);//store.dispatch(authActions.SetAccessToken(window.location.hash.split('=')[1].split('&')[0]));
            browserHistory.push('/');
        }
        else if(localStorage.getItem('access_token') === undefined){
            store.dispatch(authActions.Login())
        }
    }

    render() {
        return (
            <Provider store={store}>
                    {routes}                
            </Provider>

        )
    }
}