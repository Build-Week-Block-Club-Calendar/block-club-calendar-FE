import React, { useState } from 'react';
import { connect } from "react-redux";
import { postEvent } from '../../actions/eventActions';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import EventForm from '../events/EventForm';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function AddEventFab(props) {
  const classes = useStyles();

  // event form dialog state handlers
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  // closes the form dialog and posts the event
  const addEvent = (newEvent) => {
    props.postEvent(newEvent)
    handleClose();
  }

  // error message dialog state handlers
  const [errorOpen, setErrorOpen] = useState(true);
  // const handleErrorOpen = () => {
  //   setErrorOpen(true);
  // };
  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  return (
    <div>
      <Fab 
        color="primary"
        variant="extended" 
        aria-label="add event" 
        className={classes.fab}
        onClick={handleOpen}
      >
        <AddIcon className={classes.extendedIcon} />
        Create Event
      </Fab>

      {/* form dialog box with EventForm appears when FAB is clicked */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a New Event</DialogTitle>
        <DialogContent>

          <EventForm type="add" action={addEvent} />

        </DialogContent>
      </Dialog>

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
    </div>
  );
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
)(AddEventFab);
