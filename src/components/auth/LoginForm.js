import React from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { logIn } from "../../actions/authActions";

const useStyles = makeStyles(theme => ({
    columnNowrap: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
  }));

function LoginForm (props) {
    const classes = useStyles();

    return (
        <>
        {props.isLoggedIn ? <Redirect push to="/calendar" /> : null}
        <Formik
            initialValues={{ username: "", password: "" }}
            validate={values => {
                let errors = {};
                if (values.username === "") {
                errors.username = "Username is required";
                } else if (values.username.length < 2) {
                errors.username = "Username must be 2 characters at minimum";
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
                    password: values.password });
                props.logIn({ 
                    username: values.username, 
                    password: values.password });
                actions.setSubmitting(false);
            }}
        >
            {() => (
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
                        type="password" 
                        name="password" 
                        label="Password"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Log In
                    </Button>
                </Form> 
            )}
        </Formik>
        {props.isError && (
            <p className="error">{props.error.message}</p>
        )}
        </>
    )

}

const mapStateToProps = state => {
    return {
      user: state.auth.user,
      isPosting: state.auth.isPosting,
      isLoggedIn: state.auth.isLoggedIn,
      isError: state.auth.isError,
      error: state.auth.error
    };
};
  
export default connect(
    mapStateToProps,
    { logIn }
)(LoginForm);