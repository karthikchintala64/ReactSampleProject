import { List } from 'immutable';

import  INITIAL_STATE  from './initialState';
import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/actiontypes';

export default (state = INITIAL_STATE.counter, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return state.push(0);
        case REMOVE_COUNTER:
            return state.pop();
        case INCREMENT_COUNTER:
            return state.set(action.payload.index,state.get(action.payload.index)+1)
        case DECREMENT_COUNTER:
            return state.set(action.payload.index,state.get(action.payload.index)-1);
        default:
            return state;
    }
}