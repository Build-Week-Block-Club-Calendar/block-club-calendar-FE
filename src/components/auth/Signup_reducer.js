import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { connect } from "react-redux";
import { signUp } from "../../actions";


function Signup (props) {
    // const signup = (credentials) => {
    //     // create account
    //     // route to /login
    //     axiosWithAuth()
    //       .post('/api/auth/register', credentials)
    //       .then(res => {
    //         console.log("res from signup post", res);
    //         props.history.push('/login');
    //       })
    //       .catch(err => console.log(err.response));
    //   };

    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return (
        <Paper>
          <Typography variant="h4" component="h2">
            Sign Up
          </Typography>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validate={values => {
                let errors = {};
                if (values.username === "") {
                errors.username = "Username is required";
                } else if (values.username.length < 2) {
                errors.username = "Username must be 2 characters at minimum";
                }
                if (values.email === "") {
                errors.email = "Email is required";
                } else if (!emailTest.test(values.email)) {
                errors.email = "Invalid email address format";
                }
                if (values.password === "") {
                errors.password = "Password is required";
                } else if (values.password.length < 3) {
                errors.password = "Password must be 3 characters at minimum";
                }
                return errors;
            }}
            onSubmit={(values, actions) => {
                alert("Form is validated! Submitting the form...");
                console.log("credentials from object", { 
                    username: values.username, 
                    email: values.email, 
                    password: values.password });
                // signup({ username: values.username, password: values.password });
                actions.setSubmitting(false);
            }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="username" placeholder="Username" />
                        <ErrorMessage
                            component="p"
                            name="username"
                            className="error"
                        />

                        <Field type="text" name="email" placeholder="Email Address" />
                        <ErrorMessage
                            component="p"
                            name="email"
                            className="error"
                        />
                
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage
                            component="p"
                            name="password"
                            className="error"
                        />  
                        <div className="button-container">
                            <button 
                                type="submit" 
                                className="primary-button"
                                disabled={isSubmitting}>
                            {isSubmitting ? "Please wait..." : "Sign Up"}
                            </button>
                        </div>
                    </Form> 
                )}
            </Formik>
        </Paper>
    )

}


export default Signup;