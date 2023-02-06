import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, FormGroup } from 'react-bootstrap'

const UserForm = props => {
  
    const { inputs, setInputs } = props;

   
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

   
    const handleErrors = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs);

        if (e.target.name == "firstName" || e.target.name == "lastName") {
            if (e.target.value.length != 0 && e.target.value.length < 2) {
                setErrors({...errors,[e.target.name]: "Name must be at least 2 characters."});
            }else{
                setErrors({...errors,[e.target.name]: ""});
            }
        }
        if(e.target.name == 'email'){
            if(e.target.value.length < 2 && e.target.value.length != 0){
                setErrors({...errors, [e.target.name]: "Email must be at least 2 characters."});
            }
            else{
                setErrors({...errors, [e.target.name]: ""});
            }
        }
        if(e.target.name == 'password' || e.target.name == 'confirmPassword'){
            
            
            if((e.target.value.length < 2 && e.target.value.length != 0) ){
                
                setErrors({...errors, [e.target.name]: "Password must be at least 8 characters."});
            }
            else{
                setErrors({...errors, [e.target.name]: ""});
            }
        }
    };

    return (
        <div className="form-container">
           
            <Form className="signup-form">
                <Form.Group>
                    <div className="mb-3">
                        {} 
                        <Form.Control type="text" className="name-input" name="firstName" placeholder="First Name" onChange={handleErrors}/>
                        {errors.firstName ? <p className="text-danger small">{errors.firstName}</p> : "" }
                    </div>
                    <div className="mb-3">
                        <Form.Control type="text" className="name-input" name="lastName" placeholder="Last Name" onChange={handleErrors}/>
                        {errors.lastName ? <p className="text-danger small">{errors.lastName}</p> : "" }
                    </div>
                    <div className="mb-3">
                        <Form.Control type="text" className="email-input" name="email" placeholder="Email" onChange={handleErrors}/>
                        {errors.email ? <p className="text-danger small">{errors.email}</p> : "" }
                    </div>
                    <div className="mb-3">
                        <Form.Control type="text" className="password-input" name="password" placeholder="Password" onChange={handleErrors}/>
                        {errors.password ? <p className="text-danger small">{errors.password}</p> : "" }
                    </div>
                    <div className="mb-3">
                        <Form.Control type="text" className="password-input" name="confirmPassword" placeholder="Confirm Password" onChange={handleErrors}/>
                        {errors.confirmPassword ? <p className="text-danger small">{errors.confirmPassword}</p> : "" }
                    </div>
                    <div>
                        {(inputs.password != inputs.confirmPassword) ? <p className="text-danger small"> 
                        Passwords must match.</p> :''}
                    </div>
                  
                </Form.Group>
            </Form>
        </div>
    );
};

export default UserForm;