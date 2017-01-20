import * as React from 'react';
import { connect } from 'react-redux';
import {List } from 'immutable';

import {store} from '../store';
import * as counterActions from '../actions/counterActions'

import  CounterComponent  from '../Components/counter';


export interface ICounterContainerProps extends React.Props<any>{
    counter:List<Number>,
    onIncrement(id),
    onDecrement(id)
}


class CounterContainer extends React.Component<ICounterContainerProps,any>{
    onAddCounter(){
        store.dispatch(counterActions.AddCounter())
    }

    onRemoveCounter(){
        store.dispatch(counterActions.RemoveCounter())
    }
    

    onDecrement(index){
        store.dispatch(counterActions.Decrement(index))
    }

    render(){
        const { counter, onIncrement, onDecrement }= this.props;
        const that=this;
        return (
            <div>
            
                {counter.map(function(value,index){
                    return <CounterComponent 
                                key={index} 
                                count={value} 
                                index={index+1} 
                                onIncrement={()=> onIncrement(index)} 
                                onDecrement={() => onDecrement(index)}  />
                })}
                <button onClick={this.onAddCounter}>Add Counter</button>
                <button onClick={this.onRemoveCounter}>Remove Counter</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=> {
    return ({
        counter:state.counter
    });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: (id) => {
      dispatch(counterActions.Increment(id))
    },
    onDecrement: (id) => {
        dispatch(counterActions.Decrement(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

