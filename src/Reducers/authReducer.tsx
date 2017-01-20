import { List } from 'immutable';

import { CLIENT_ID, TENANT_ID, GRAPH_RESOURCE } from '../constants';
import INITIAL_STATE from './initialState';
import { LOGIN, GET_ACCESS_TOKEN, SET_ACCESS_TOKEN } from '../actions/actiontypes';

export default (state = INITIAL_STATE.auth, action) => {
    switch (action.type) {
        case LOGIN:
            window.location.href = "https://login.microsoftonline.com/" + TENANT_ID +
                "/oauth2/authorize?response_type=id_token&client_id=" + CLIENT_ID +
                "&redirect_uri=" + encodeURIComponent(window.location.origin) +
                "&state=SomeState&nonce=SomeNonce";
            return state;

        case GET_ACCESS_TOKEN:
            window.location.href = "https://login.microsoftonline.com/" + TENANT_ID +
                "/oauth2/authorize?response_type=token&client_id=" + CLIENT_ID +
                "&resource=" + GRAPH_RESOURCE +
                "&redirect_uri=" + encodeURIComponent(window.location.href) +
                "&prompt=none&state=SomeState&nonce=SomeNonce";
            return state;

        case SET_ACCESS_TOKEN:
            
            return state;
        default:
            return state;
    }
}