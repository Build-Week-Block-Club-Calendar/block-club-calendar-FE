import React, {useState} from 'react';
// import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const FormikDatePicker = ({
    name,
    form: { setFieldValue },
    field: { value },
    ...rest
  }) => {
    // console.log(rest);
    const [selectedDate, setSelectedDate] = useState(value ? value : null);
    // const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleDateChange = date => {
        console.log("setting value to", date);
        setSelectedDate(date);
        setFieldValue("date", date)
    };

    // const handleDateTimeChange = date => {
    //     console.log("setting value to", date);
    //     setSelectedDateTime(date);
    //     setSelectedDate(date);
    //     setFieldValue("date", date)
    // };

    return (
        <Box mt={1}>
            <Grid container justify="space-around">
                
                <MuiPickersUtilsProvider utils={MomentUtils}>                    
                    <DatePicker
                        name={name}
                        id="date-picker"
                        // keyboard
                        clearable
                        autoOk
                        label="Event Date"
                        format="MMM Do YYYY"
                        // handle clearing outside => pass plain array if you are not controlling value outside
                        // mask={value =>
                        //   value
                        //     ? [/[0-3]/, /\d/, "/", /0|1/, /\d/, "/", /1|2/, /\d/, /\d/, /\d/]
                        //     : []
                        // }
                        // disableOpenOnEnter
                        value={selectedDate}
                        onChange={handleDateChange}
                        animateYearScrolling={false}
                    />
                    <TimePicker
                        name="time"
                        id="time-picker"
                        label="Event Time"
                        // value={selectedDateTime}
                        // onChange={handleDateTimeChange}
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
        </Box>
    );
  };

export default FormikDatePicker;