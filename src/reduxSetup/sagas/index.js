import * as actionTypes from '../actions/index';
import {takeEvery} from 'redux-saga/effects'
import {loggedUser, authToken, logoutSaga} from './auth'

export function* watchLoggedUser(){
    yield takeEvery(actionTypes.LOGGED_USER_SAGA,loggedUser);
    yield takeEvery(actionTypes.STORE_TOKEN_SAGA,authToken);
    yield takeEvery(actionTypes.LOGOUT_SAGA,logoutSaga);
} 