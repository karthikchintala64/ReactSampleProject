import * as React from 'react';
import { connect } from 'react-redux';

import {store} from '../Store/store';
import * as counterActions from '../actions/counterActions'

class Counter extends React.Component<any,any>{
    onIncrement(){
        store.dispatch(counterActions.Increment);
    }

    onDecrement(){
        store.dispatch(counterActions.Decrement)
    }

    render(){
        return (
            <div>
                Counter: {store.getState().counter}
                <br/>
                <button onClick={this.onIncrement}>+</button>
                <span className="">&nbsp;</span>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

export default connect(state => ({
    counter: state.counter
}))(Counter);

