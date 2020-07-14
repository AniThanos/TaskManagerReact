import {combineReducers} from 'redux';
import user from './login/loginReducer';
import authToken from './authToken/authReducer';
export default combineReducers({
    user,
    authToken
})