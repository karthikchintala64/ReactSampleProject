import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from './actiontypes';

export const Increment = (index) => {
    return {
        type: INCREMENT_COUNTER,
        payload: {
            index: index
        }
    }
}

export const Decrement = (index) => {
    return {
        type: DECREMENT_COUNTER,
        payload: {
            index: index
        }
    }
}

export const AddCounter = () => {
    return {
        type: ADD_COUNTER
    }
}

export const RemoveCounter = () => {
    return {
        type: REMOVE_COUNTER
    }
}