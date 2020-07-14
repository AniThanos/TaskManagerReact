import React from 'react';
import {useFormik} from 'formik'
import './signup.css'

const SignUP = (props) => {
    // const [form,setForm] = useState({
    //     name:'',
    //     age:'',
    //     email:'',
    //     password:''
    // }) 
    const validate = values => {
        const errors = {};
        if(values.password.length < 8){
            errors.password = "Passsword should be more than 8 characters"
        }
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            name:'',
            age:'',
            email:'',
            password:''
        },
        validate,
        onSubmit : values =>{
            console.log(values)

        }
        
    })
    return(
        <React.Fragment>
             <p className="login_form_header">SignUP</p>
            <form onSubmit={formik.handleSubmit} className="signup_form">
                <div className="form-group">
                    <label className="login_form_label">Name</label>
                    <input type="text" name="name" onChange={formik.handleChange} 
                    className="form-control"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    required
                    /> 
                </div>
                <div className="form-group">
                    <label className="login_form_label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                        onBlur={formik.handleBlur}
                        required    
                   />
                </div>
                <div className="form-group">
                    <label className="login_form_label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="login_form_label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        required
                    />
                    {formik.touched.password && formik.errors.password && <div className="error_field">{formik.errors.password}</div>}    
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">SignUP</button>
                <br/>
                <a onClick={props.handleForm} className="btn">Back</a>
            </form>
        </React.Fragment>
    )
}

export default SignUP;