declare var window: Window & { devToolsExtension: any };
import { createStore } from 'redux';
import combinedReducer from '../Reducers'



export const store= createStore(combinedReducer,window.devToolsExtension && window.devToolsExtension());
