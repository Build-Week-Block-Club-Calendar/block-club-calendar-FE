import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Collapse from '@material-ui/core/Collapse';
// import clsx from 'clsx';

import CalendarEvent from './CalendarEvent';

const useStyles = makeStyles(theme => ({
  card: {
    width: '90%',
    maxWidth: 1000,
    marginTop: 15,
    marginBottom: 15,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
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
            <CalendarEvent event={event} />   
            ))}
        </Box>
    );
}