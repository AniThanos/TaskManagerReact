import React, {useState} from 'react';
import './login.css';
import loginGif from "../../images/miracl_box.gif";
import LoginForm from '../../components/LoginForm/loginform';
import SignUPForm from '../../components/SignUp/signup';
// import {setLogout} from '../../reduxSetup/actions/logged'
import { connect } from 'react-redux';

const Login = (props) => {
    const [form,setForm] = useState(false);
    const formHandler = () => {
        setForm(!form)
    } 
 return (
     <div className="login_container">
         <div className="login_image_container">
            <img src={loginGif} className="img-responsive" alt="login"/>
         </div>
         <div className="login_form_container">
             {form ? <SignUPForm handleForm={formHandler}/> : <LoginForm handleForm={formHandler}/>}
            
         </div>
     </div>
 )
}

const mapStateToProps = state => ({
    auth: state.authToken
})

export default connect(mapStateToProps,{})(Login);