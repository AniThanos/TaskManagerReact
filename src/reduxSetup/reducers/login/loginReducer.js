import * as actionTypes from '../../actions/index';

const user = ''; 

export default function(state= user, action) {
    switch(action.type){
        case actionTypes.LOGGED_USER : 
            return action.payload;
        
        default: 
            return state; 
    }
}
