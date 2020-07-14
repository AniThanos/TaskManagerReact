import * as actionTypes from '../actions/index';
import {put} from 'redux-saga/effects'
import {logoutUser} from '../../config/calls'
import { logout } from '../../config/urls';

export function* logoutSaga(action){
    yield logoutUser(logout, action.payload)
    yield put ({
        type: actionTypes.LOGOUT_USER
    })
}

export function* loggedUser(action){
    yield put({
        type : actionTypes.LOGGED_USER,
        payload : action.payload
    })
}

export function* authToken(action){
    yield put({
        type: actionTypes.STORE_TOKEN,
        payload : action.payload       
    })
}