import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from './counterReducer';

const combinedReducer = combineReducers({
  routing: routerReducer,
  counter: counterReducer
});

export default combinedReducer;