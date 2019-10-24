import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { postEvent } from '../../actions/eventActions';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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

    // error message dialog state handlers
    const [errorOpen, setErrorOpen] = useState(true);
    // const handleErrorOpen = () => {
    //     setErrorOpen(true);
    // };
    const handleErrorClose = () => {
        setErrorOpen(false);
    };
    
    return (
        <>
        {/* redirects backs to calendar after event posts */}
        {props.isSuccessful ? <Redirect push to="/calendar" /> : null}
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
                    <EventForm type="add" action={props.postEvent} />

                    {/* error dialog box appears when form EventForm returns an error */}
                    {props.isError && 
                        <Dialog open={errorOpen} onClose={handleErrorClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Sorry, there is an error</DialogTitle>
                        <DialogContent> 
                            <p>{`${props.error}`}</p>
                            <p>Please ensure you are logged in and try again</p>
                        </DialogContent>
                        </Dialog>
                    }
                </Paper>
             </Grid>
        </Grid>
        {/* redirects to /calendar if the event submission succeeds */}
        {props.isError && 
            <Dialog open={errorOpen} onClose={handleErrorClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Sorry, there is an error</DialogTitle>
            <DialogContent> 
                <p>{`${props.error}`}</p>
                <p>Please ensure you are logged in and try again</p>
            </DialogContent>
            </Dialog>
        }
        </>
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
