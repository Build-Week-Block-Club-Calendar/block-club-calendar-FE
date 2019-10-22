import React from 'react';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-material-ui';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    columnNowrap: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
  }));

function LoginForm (props) {
    const classes = useStyles();

    const login = (credentials) => {
        // login to retrieve the JWT token
        // add the token to localstorage
        // route to /friends (whatever landing page)
        axiosWithAuth()
          .post('/api/auth/login', credentials)
          .then(res => {
            console.log("res from login post", res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/calendar');
          })
          .catch(err => console.log(err.response));
      };

    return (
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
                // alert("Form is validated! Submitting the form...");
                console.log("credentials from object", { 
                    username: values.username, 
                    password: values.password });
                // login({ username: values.username, password: values.password });
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
    )

}


export default LoginForm;