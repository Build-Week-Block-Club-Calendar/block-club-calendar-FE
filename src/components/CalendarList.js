import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import { connect } from "react-redux";
import { getEventList, deleteEvent } from "../actions/eventActions";

import Box from '@material-ui/core/Box';

import CalendarEvent from './CalendarEvent';
import AddEventFab from './events/AddEventFab';


function CalendarList(props) {

//   const [expanded, setExpanded] = React.useState(false);
  // const [data, setData] = useState([]);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
// console.log("props.deleteEvent", props.deleteEvent)
  useEffect(() => {
    props.getEventList()
  }, [props.isPosting]);

  
    return (
        <Box display="flex" flexDirection="Column" flexWrap="nowrap" alignItems="center">
            {props.eventList.map(event => (
            <CalendarEvent 
              key={event.id} 
              event={event} 
              delete={props.deleteEvent} />   
            ))}
            <AddEventFab />
        </Box>
    );
}

const mapStateToProps = state => {
    return {
      eventList: state.event.eventList,
      isFetching: state.event.isFetching,
      isPosting: state.event.isPosting,
      isSuccessful: state.event.isSuccessful,
      isError: state.event.isError,
      error: state.event.error
    };
};
  
export default connect(
    mapStateToProps,
    { getEventList, deleteEvent }
)(CalendarList);