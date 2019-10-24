import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import { connect } from "react-redux";
import { getEventList, deleteEvent, deleteEventAdmin } from "../actions/eventActions";
import { getGoingList, postGoing } from "../actions/goingActions";

import Box from '@material-ui/core/Box';

import CalendarEvent from './CalendarEvent';
import AddEventFab from './events/AddEventFab';


function CalendarList(props) {

  useEffect(() => {
    props.getEventList()
  }, [props.event.isPosting]);

  useEffect(() => {
    props.getGoingList()
  }, [props.going.isPosting]);

  const goingAction = (id) => {
    if (props.auth.isLoggedIn) {
      props.postGoing(id);
      return }
    alert("You must log in to RSVP!");
    return
  }
  
    return (
        <Box display="flex" flexDirection="Column" flexWrap="nowrap" alignItems="center">
            {props.event.eventList.map(event => {
              const eventAttendees = props.going.goingList
                .filter(entry => entry.Event === event.Title)
                .map(entry => entry.Username);
              let isGoing = false;
              if (eventAttendees.includes(props.auth.user.username)){
                // console.log(`you, ${props.auth.user.username}, are going to ${event.Title}`)
                isGoing = true;
              }
              // let showGoing = false;
              // if (props.going.goingList
              //   .filter(entry => entry.Event === event.Title)
              //   .map(entry => entry.Username === props.auth.user.username);
              console.log(`event attendees for ${event.Title}`, eventAttendees);
              if (props.auth.user.role === "admin") {
                return <CalendarEvent 
                  key={event.id} 
                  event={event}
                  isGoing={isGoing}
                  goingAction={() => goingAction(event.id)}
                  showEdit={true} 
                  showDelete={true} 
                  delete={props.deleteEventAdmin}
                  attendees={eventAttendees} />
              } else if (event.Organizer === props.auth.user.username) {
                // console.log("inside the if", props.user.username)
                return <CalendarEvent 
                  key={event.id} 
                  event={event}
                  isGoing={isGoing}
                  goingAction={goingAction}
                  showEdit={true} 
                  showDelete={true} 
                  delete={props.deleteEvent}
                  attendees={eventAttendees} />  
              }
            // console.log("inside the else", props.user.username)
            return <CalendarEvent 
              key={event.id} 
              event={event}
              isGoing={isGoing}
              goingAction={() => goingAction(event.id)}
              showEdit={false} 
              showDelete={false} 
              delete={props.deleteEvent}
              attendees={eventAttendees} /> })}
            <AddEventFab />
        </Box>
    );
}

const mapStateToProps = state => {
    return {
      auth: {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn
        },
      event: {
        eventList: state.event.eventList,
        isFetching: state.event.isFetching,
        isPosting: state.event.isPosting,
        isSuccessful: state.event.isSuccessful,
        isError: state.event.isError,
        error: state.event.error
        },
      going: {
        goingList: state.going.goingList,
        isFetching: state.going.isFetching,
        isPosting: state.going.isPosting,
        isSuccessful: state.going.isSuccessful,
        isError: state.going.isError,
        error: state.going.error
    }
    };
};
  
export default connect(
    mapStateToProps,
    { getEventList, deleteEvent, deleteEventAdmin, getGoingList, postGoing }
)(CalendarList);