import React from 'react';
import { connect } from 'react-redux';
import { setLogout } from '../../reduxSetup/actions/logged';

const Taskmanager = (props) => {
    if(!props.auth){
        props.history.push('/')
    }
    const logoutUser = (e) => {
        props.setLogout(props.auth)
        props.history.push('/')
    }
    return(
        <div>
            <h1>Task Manager</h1>
            <button type="button" onClick={logoutUser}>logout</button>
        </div>
    )
} 

const mapStateToProps = state => ({
    auth : state.authToken
})
export default connect(mapStateToProps,{setLogout})(Taskmanager);