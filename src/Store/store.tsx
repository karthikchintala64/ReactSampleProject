declare var window: Window & { devToolsExtension: any };
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer
});

export const store= createStore(rootReducer,window.devToolsExtension && window.devToolsExtension());