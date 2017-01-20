import * as React from 'react';
import { connect } from 'react-redux';
import {List } from 'immutable';

import {store} from '../store';
import * as counterActions from '../actions/counterActions'

export interface ICounterComponentProps extends React.Props<any>{
    index:Number,
    count:Number,
    onIncrement(),
    onDecrement()
}

export default class CounterComponent extends React.Component<ICounterComponentProps,any>{

    render(){
        const { index, count } =this.props;
        return (
            <div>
                Counter {index} : {count}
                <br/>
                <button onClick={() => this.props.onDecrement()}>-</button>
                <button onClick={() => this.props.onIncrement()}>+</button>
            </div>
        );
    }
}
