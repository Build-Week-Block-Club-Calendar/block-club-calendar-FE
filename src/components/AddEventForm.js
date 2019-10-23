import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    columnNowrap: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
  }));

function AddEventForm (props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(selectedDate);
    };

    return (
        <>

        <Formik
            initialValues={{ title: "", date: "", time: "", location: "", description: "", link: "", image: "" }}
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
                alert("Form is validated! Submitting the form...");
                console.log("user input for new event", { 
                    title: values.title, 
                    date: values.date,
                    time: values.time,
                    location: values.location,
                    description: values.description,
                    link: values.link,
                    image: values.image, });
                actions.setSubmitting(false);
            }}
        >

            {() => (
                <Form className={classes.columnNowrap}>
                    <Field 
                        type="text" 
                        name="title" 
                        label="Event Title"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                name="date"
                                id="date-picker-dialog"
                                label="Event Date"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                name="time"
                                id="time-picker"
                                label="Event Time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

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
                        label="Image Upload"
                        component={TextField}
                        margin="normal"
                        fullWidth 
                    />

                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Create Event
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

export default AddEventForm;
