import React, { useState } from 'react';
import { connect } from "react-redux";
import { updateEvent, updateEventAdmin } from '../../actions/eventActions';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import EventForm from './EventForm';

function EditEventButton(props) {

  // event form dialog state handlers
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // close the form dialog and puts the event to correct endpoint for role
  const editEvent = (values) => {
    handleClose();
    if (props.user.role === "admin") {
      props.updateEventAdmin({
      ...values,
      id: props.values.id
      });
      return }
    props.updateEvent({
      ...values,
      id: props.values.id
    });
    return
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
      <Button 
        variant="contained" 
        color="secondary"
        onClick={handleOpen}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>

      {/* form dialog box with EventForm appears when edit button is clicked */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Make Changes to Event Details</DialogTitle>
        <DialogContent>

          <EventForm type="edit" action={() => editEvent(null)} values={props.values} />

        </DialogContent>
      </Dialog>

      {/* error dialog box appears when form EventForm returns an error */}
      {props.isError && 
        <Dialog open={errorOpen} onClose={handleErrorClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sorry, there is an error</DialogTitle>
          <DialogContent> 
            <DialogContentText>{`${props.error}`}</DialogContentText>
            <DialogContentText>Please ensure you are logged in and try again</DialogContentText>
          </DialogContent>
        </Dialog>
      }
    </div>
  );
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
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
    { updateEvent, updateEventAdmin }
)(EditEventButton);
