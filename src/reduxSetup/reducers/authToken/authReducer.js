import * as actionTypes from '../../actions/index'

const token = '';
export default function(state = token, action){
    switch(action.type){
        case actionTypes.STORE_TOKEN:
            return action.payload
        
        case actionTypes.LOGOUT_USER:  
                return ''

        default:
            return state;
        }
}