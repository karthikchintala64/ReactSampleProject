import * as immutable from 'immutable';
import { GetUserDetails, FetchUserDetails, SetUserDetails } from '../actions/userActions';
import { GET_USER_DETAILS, SET_USER_DETAILS } from '../actions/actiontypes';

import InitialState from './initialState';

export default (state= InitialState.user, action) => {
    switch (action.type) {
        case GET_USER_DETAILS:
                         
            return { 
                 name:'',
                isFetching:true
            };

        case SET_USER_DETAILS:
            return { 
                 name:action.payload.displayName,
                isFetching:false
            };
        default:
            return state;
    }
}