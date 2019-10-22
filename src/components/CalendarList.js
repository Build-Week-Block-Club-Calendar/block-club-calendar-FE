import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Box from '@material-ui/core/Box';

import CalendarEvent from './CalendarEvent';

export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState([]);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  useEffect(() => {
    axios
      .get(`https://block-club-calendar.herokuapp.com/api/events`, {
      })
      .then(response => {
        const events = response.data;
        setData(events);
        console.log(events);
      });
  }, []);

  
    return (
        <Box display="flex" flexDirection="Column" flexWrap="nowrap" alignItems="center">
            {data.map(event => (
            <CalendarEvent event={event} key={event.id} />   
            ))}
        </Box>
    );
}