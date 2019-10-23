import React from 'react';
import { connect } from "react-redux";
import { postEvent } from '../../actions/eventActions';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import EventForm from './EventForm';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
  }));

function AddEvent (props) {
    const classes = useStyles();
    console.log("props from AddEvent", props)

    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="flex-start"
          style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} med={4}>
                <Paper className={classes.root}>
                    <Typography variant="h5" component="p">
                    Add Event to Block Club Calendar
                    </Typography>
                    <EventForm action={props.postEvent} />
                </Paper>
             </Grid>
        </Grid> 
    )

}

const mapStateToProps = state => {
    return {
        eventList: state.event.eventList,
        event: state.event.event,
        isPosting: state.event.isPosting,
        isSuccessful: state.event.isSuccessful,
        isError: state.event.isError,
        error: state.event.error
    };
};
  
export default connect(
    mapStateToProps,
    { postEvent }
)(AddEvent);
