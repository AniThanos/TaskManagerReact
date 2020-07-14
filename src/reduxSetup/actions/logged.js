import {LOGGED_USER_SAGA, 
    STORE_TOKEN_SAGA,
    LOGOUT_SAGA } from './index'


export const setUser = data => dispatch => {
    dispatch({
        type : LOGGED_USER_SAGA,
        payload : data
    })
}

export const setToken = data => dispatch => {
    dispatch({
        type : STORE_TOKEN_SAGA,
        payload : data
    })
}

export const setLogout = data => dispatch =>{
    dispatch({
        type: LOGOUT_SAGA,
        payload: data
    })
}