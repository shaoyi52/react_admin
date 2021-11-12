import {createStore,combineReducers,applyMiddleware,compose,Middleware,Reducer} from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import settingsReducer from './module/settings';
const reducers=combineReducers({
    settings:settingsReducer
})

const middleware=[reduxThunk];

if(process.env.NODE_ENV === 'development'){
    middleware.push(reduxLogger)
}

function createMyStore(){
    const store= window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        reducers,
        compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__({}))
    ):createStore(reducers, applyMiddleware(...middleware));
}

const store = createMyStore();

export default store;