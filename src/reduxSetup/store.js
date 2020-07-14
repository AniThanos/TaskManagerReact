import {createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import {watchLoggedUser} from './sagas/index'

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,initialState,composeWithDevTools(
    applyMiddleware(thunk,sagaMiddleware))
    );

sagaMiddleware.run(watchLoggedUser);

export default store;