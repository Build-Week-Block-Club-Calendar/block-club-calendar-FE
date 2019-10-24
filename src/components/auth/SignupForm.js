import React from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-material-ui';
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";

import Loader from 'react-loader-spinner'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    columnNowrap: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
    error: {
        color: red[500],
    }
  }));

function SignupForm (props) {
    const classes = useStyles();
      
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return (
        <>
        {props.isSignedUp ? <Redirect push to="/login" /> : null}
        {props.isLoggedIn ? <Redirect push to="/calendar" /> : null}
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
                props.signUp({ 
                    username: values.username, 
                    email: values.email, 
                    password: values.password 
                })
                actions.setSubmitting(false);
                // alert("Form is validated! Submitting the form...");
                // console.log("credentials from object", { 
                //     username: values.username, 
                //     email: values.email, 
                //     password: values.password });
            }}
        >
            {({ isSubmitting }) => (
                <Form className={classes.columnNowrap}>
                    <Field 
                        type="text" 
                        name="username" 
                        label="Username"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Field 
                        type="text" 
                        name="email" 
                        label="Email Address" 
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />
            
                    <Field 
                        type="password" 
                        name="password" 
                        label="Password"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    
                    { props.isPosting 
                    // if true, show disabled button with loading spinner
                    ? (<Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled
                    >
                        <Loader type="ThreeDots" color="#b6c2b7" height={10} width={45} />
                    </Button>) 
                    // if false, show Log In button
                    : (
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </Button>)}
                </Form> 
            )}
        </Formik>
        {props.isError && 
        // if true, render an error
        ( <p className={classes.error}>{props.error}</p>)}
        </>
    )

}

const mapStateToProps = state => {
    return {
      user: state.auth.user,
      isPosting: state.auth.isPosting,
      isSignedUp: state.auth.isSignedUp,
      isLoggedIn: state.auth.isLoggedIn,
      isError: state.auth.isError,
      error: state.auth.error
    };
};
  
export default connect(
    mapStateToProps,
    { signUp }
)(SignupForm);