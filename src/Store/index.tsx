declare var window: Window & { devToolsExtension: any };
import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducer from '../Reducers'
import thunkMiddleware from 'redux-thunk';

        
const middleware=   applyMiddleware(thunkMiddleware);

export const store= createStore(
        combinedReducer,
        compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
    );
