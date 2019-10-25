import React, { useEffect} from 'react';
// import axios from 'axios';
import { connect } from "react-redux";
import { getEventList, deleteEvent, deleteEventAdmin } from "../../actions/eventActions";
import { getGoingList, postGoing } from "../../actions/goingActions";

import Loader from 'react-loader-spinner'
import Box from '@material-ui/core/Box';

import CalendarEvent from './CalendarEvent';
import AddEventFab from './AddEventFab';


function CalendarList(props) {
  const { getEventList, getGoingList } = props;

  useEffect(() => {
    getEventList()
  }, [props.event.isSuccessful, getEventList]);

  useEffect(() => {
    getGoingList()
  }, [props.going.isPosting, getGoingList]);

  const goingAction = (id) => {
    if (props.auth.isLoggedIn) {
      props.postGoing(id);
      return }
    alert("You must log in to RSVP!");
    return
  }
  
  if (props.event.isFetching) {
    return ( 
      <Box display="flex" flexDirection="Column" flexWrap="nowrap" justifyContent="center" alignItems="center">
        <Loader type="Hearts" color="#66bb6a" height={80} width={80} />
      </Box> )
    }

    return (
      <Box display="flex" flexDirection="Column" flexWrap="nowrap" alignItems="center">

        {/* map function for rendering event cards */}

          {props.event.eventList.map(event => {
            const eventAttendees = props.going.goingList
              .filter(entry => entry.Event === event.Title)
              .map(entry => entry.Username);
            let isGoing = false;
            if (eventAttendees.includes(props.auth.user.username)){
              // console.log(`you, ${props.auth.user.username}, are going to ${event.Title}`)
              isGoing = true;
            }
            // console.log(`event attendees for ${event.Title}`, eventAttendees);
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
            attendees={eventAttendees} /> })
          }
        {/* end map function for rendering event cards */}

        {props.auth.isLoggedIn && <AddEventFab />}
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