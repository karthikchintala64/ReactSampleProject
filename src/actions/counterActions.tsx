
export const Increment = function (index) {
    return {
        type: 'INCREMENT',
        payload: {
            index: index
        }
    }
}

export const Decrement = function (index) {
    return {
        type: 'DECREMENT',
        payload: {
            index: index
        }
    }
}

export const ADD_COUNTER= {
    type:'ADD_COUNTER'
}

export const REMOVE_COUNTER= {
    type:'REMOVE_COUNTER'
}