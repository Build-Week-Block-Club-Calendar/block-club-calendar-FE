import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    columnNowrap: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
  }));

  const FormikDatePicker = ({
    name,
    form: { setFieldValue },
    field: { value },
    ...rest
  }) => {
    // console.log(rest);
    return (
      <DatePicker
        name={name}
        // keyboard
        clearable
        autoOk
        label="Event Date"
        format="dd/MM/yyyy"
        // handle clearing outside => pass plain array if you are not controlling value outside
        // mask={value =>
        //   value
        //     ? [/[0-3]/, /\d/, "/", /0|1/, /\d/, "/", /1|2/, /\d/, /\d/, /\d/]
        //     : []
        // }
        // disableOpenOnEnter
        onChange={value => {
          console.log("setting value to", value);
          setFieldValue("date", value);
        }}
        value={value}
        animateYearScrolling={false}
      />
    );
  };

function AddEventForm (props) {
    const classes = useStyles();

    // const [selectedDate, setSelectedDate] = useState(new Date());

    // const handleDateChange = date => {
    //     setSelectedDate(selectedDate);
    // };

    return (
        <>

        <Formik
            initialValues={{ title: "", date: null, time: "", location: "", description: "", link: "", image: "" }}
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

                        <Grid container justify="space-around">                    
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                            <DatePicker
    //   name={name}
      keyboard
      clearable
      autoOk
      label="Masked input"
      format="dd/MM/yyyy"
      placeholder="10/10/2018"
      // handle clearing outside => pass plain array if you are not controlling value outside
      mask={value =>
        value
          ? [/[0-3]/, /\d/, "/", /0|1/, /\d/, "/", /1|2/, /\d/, /\d/, /\d/]
          : []
      }
      disableOpenOnEnter
    //   onChange={value => {
    //     console.log("setting value to", value);
    //     setFieldValue("date", value);
    //   }}
    //   value={value}
      animateYearScrolling={false}
    />
                            </MuiPickersUtilsProvider>
                            {/* <KeyboardTimePicker
                                margin="normal"
                                name="time"
                                id="time-picker"
                                label="Event Time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            /> */}
                        </Grid>

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