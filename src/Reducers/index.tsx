import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from './counterReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const combinedReducer = combineReducers({
  routing: routerReducer,
  auth:authReducer,
  counter: counterReducer,
  user:userReducer
});

export default combinedReducer;