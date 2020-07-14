import React, { useState} from 'react'; 
import './loginform.css';
import {useFormik} from 'formik';
import {loginUser} from '../../config/calls';
import {connect} from 'react-redux';
import {setToken, setUser} from '../../reduxSetup/actions/logged'
import {withRouter} from 'react-router';
const LoginForm = (props) => {


    // const [form,setForm] = useState({
    //     email :'',
    //     password : ''
    // })

    // const onSubmitHandler = (e) => {
    //     e.preventDefault()
    //     console.log(form)
    // }
    // const onChangeHandler = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]:e.target.value
    //     })
    // }

    const [invalidUser,setInvalidUser]=useState('')
    const validate = values => {
        const errors = {};
        if(!values.email){
            errors.email= 'Required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email= 'not an Email'
        }
        if(!values.password){
            errors.password= 'Required'
        }else if(values.password.length<8){
            errors.password = 'Atleast 8 characters'
        }
        return errors;
    }
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit: async (values) => {
            const logged = await loginUser(values);
            if(logged !== 'Invalid Username or Password'){
                props.setToken(logged.token)
                props.setUser(logged.user.name)
                props.history.push("/manager")
            }
            else{
                setInvalidUser(logged)
            }
        }

    })


    return(
        <React.Fragment>
            <p className="login_form_header">Login</p>
            <img src="https://img.icons8.com/pastel-glyph/64/000000/system-task.png"></img>
            <form onSubmit={formik.handleSubmit} className="login_form">
                <div className="form-group">
                <label className="login_form_label">Email</label>
                <input type="email" name="email" onChange={formik.handleChange}
                 className="form-control" 
                 onBlur={formik.handleBlur}
                 value ={formik.values.email}
                 required
                 />
                </div>
                {formik.touched.email && formik.errors.email && <div className="error_field">{formik.errors.email}</div>}
                <div className="form-group">
                <label className="login_form_label">Password</label>
                <input type="password" name="password" onChange={formik.handleChange} 
                className="form-control" 
                onBlur={formik.handleBlur}
                value ={formik.values.password}
                required/>
                {formik.touched.password && formik.errors.password && <div className="error_field">{formik.errors.password}</div>}
                </div>
                <button type="submit" className="btn">Login</button>
                {/* {formik.errors.error && <div className="error_field">{formik.errors.error}</div>}     */}
            </form>
                {invalidUser && <div className="error_field">{invalidUser}</div>}    
            <br/>
            <p style={{color:'#f0ffff',cursor:'pointer'}} onClick={props.handleForm}>Register here</p>
            </React.Fragment>
    )
}


export default connect(null,{setToken,setUser})(withRouter(LoginForm));