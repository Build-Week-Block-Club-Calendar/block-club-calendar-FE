import React, { useState } from 'react';
import { connect } from "react-redux";
import { updateEvent, updateEventAdmin } from '../../actions/eventActions';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import EventForm from './EventForm';

function EditEventButton(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editEvent = (values) => {
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
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Make Changes to Event Details</DialogTitle>
        <DialogContent>

          <EventForm type="edit" action={editEvent} values={props.values} />

          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
        </DialogContent>
      </Dialog>
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
