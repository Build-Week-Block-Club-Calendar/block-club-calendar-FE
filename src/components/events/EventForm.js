import React from 'react';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-material-ui';
// import * as moment from 'moment';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import EventFormPickers from './EventFormPickers';

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

function EventForm (props) {
    const classes = useStyles();

    // console.log("props from EventForm", props)

    let buttonText
    if (props.type === "add") {
        buttonText = "Create Event"
    } else if (props.type === "edit") {
        buttonText = "Update Event"
    }

    return (
        <>

        <Formik
            initialValues={
                props.values 
                    ?  { 
                        title: props.values.Title, 
                        date: props.values.Date, 
                        location: props.values.Location, 
                        address: props.values.Address, 
                        description: props.values.Description, 
                        link: props.values.Link, 
                        image: props.values.Image } 
                    : null}
            validate={values => {
                let errors = {};
                if (values.title === "") {
                errors.title = "Title is required";
                } else if (values.title.length < 2) {
                errors.username = "Title must be 2 characters at minimum";
                }
                if (values.description === "") {
                errors.description = "Description is required";
                } else if (values.description.length < 10) {
                errors.description = "Description must be 10 characters at minimum";
                }
                return errors;
            }}
            onSubmit={(values, actions) => {
                // console.log("user input for new event", { 
                //     title: values.title, 
                //     date: `${values.date}`,
                //     time: `${values.date}`,
                //     location: values.location,
                //     description: values.description,
                //     link: values.link,
                //     image: values.image, });
                props.action({ 
                    title: values.title, 
                    date: `${values.date}`,
                    location: values.location,
                    address: values.address,
                    description: values.description,
                    link: values.link,
                    image: values.image, })
                actions.setSubmitting(false);
            }}
        >

            {({ isSubmitting, setFieldValue }) => (
                <Form className={classes.columnNowrap}>
                    <Field 
                        type="text" 
                        name="title" 
                        label="Event Title"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Field component={EventFormPickers} name="date" />

                    <Field 
                        type="text" 
                        name="location" 
                        label="Location"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Field 
                        type="text" 
                        name="address" 
                        label="Address"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Field 
                        type="text" 
                        name="description" 
                        label="Description"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Field 
                        type="text" 
                        name="link" 
                        label="URL/External Link"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Field 
                        type="text" 
                        name="image" 
                        label="URL to Hosted Image"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        {buttonText}
                    </Button>
                </Form> 
            )}
        </Formik>
        
        {props.isError && 
        // if true, render an error
        ( <p className={classes.error}>{props.error}</p>)}
        </>
    )
}

export default EventForm;