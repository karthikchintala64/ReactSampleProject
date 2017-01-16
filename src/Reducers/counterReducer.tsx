import { List } from 'immutable';

const INITIAL_STATE = List.of(0)

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state.push(0);
        case 'REMOVE_COUNTER':
            return state.pop();
        case "INCREMENT":
            return state.set(action.payload.index,state.get(action.payload.index)+1)
        case "DECREMENT":
            return state.set(action.payload.index,state.get(action.payload.index)-1);
        default:
            return state;
    }
}