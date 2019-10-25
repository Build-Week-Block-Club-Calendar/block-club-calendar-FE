import React from 'react';
import * as moment from 'moment';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { red } from '@material-ui/core/colors';

import EditEventButton from '../events/EditEventButton';

const useStyles = makeStyles(theme => ({
  card: {
    width: '90%',
    maxWidth: 1000,
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  topBlock : {
    display: 'flex'
  },
  // bold: {
  //   fontWeight: 'bold',
  // },
  redBorder: {
    // border: "2px solid red"
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    // width: '50%'
  },
  details: {
    border: "2px solid #338a3e",
    padding: 10
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deletebutton: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
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

const GoingButton = withStyles(theme => ({
  root: {
    color: '#000000',
    backgroundColor: '#98ee99',
    '&:hover': {
      backgroundColor: '#98ee99',
    },
  },
}))(Button);

const DeleteButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

export default function CalendarEvent(props) {
  const classes = useStyles();
  const { event } = props;
  
  // console.log(`props from event ${event.Title}`, props)
  
    return (
        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={classes.redBorder}>
              <CardContent className={classes.content}>
                <Typography variant="h4" component="h3" align ="center" gutterBottom={true}>
                  {event.Title}
                </Typography>
                <div className={classes.details}>
                  <Typography variant="body2" component="p">
                    {/* Date: {event.Date} */}
                    Date: {`${moment(event.Date).format('dddd, MMMM Do YYYY')}`}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {/* Time: {event.Time} */}
                    Time: {`${moment(event.Date).format('h:mm A')}`}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Location: {event.Location}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Address: {event.Address}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description: {event.Description}
                  </Typography>
                </div>
                <CardActions className={classes.controls}>
                  { props.isGoing ? (<GoingButton 
                    variant="contained" 
                    startIcon={<DoneOutlineIcon />}
                    disableRipple
                    disableFocusRipple
                    onClick={() => props.goingAction(event.id)}
                  >
                    {`${props.attendees.length} Going`}
                  </GoingButton>) : (<Button 
                    variant="contained" 
                    color="primary"
                    startIcon={<ThumbUpIcon />}
                    onClick={() => props.goingAction(event.id)}
                  >
                    RSVP
                  </Button>) }
                  
                  
                  { props.showEdit ? (<EditEventButton values={event}/>) : (null) }
                  
                  { props.showDelete ? (<DeleteButton
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => props.delete(event)}
                  > 
                    Delete
                  </DeleteButton>) : (null) }
                  
                </CardActions>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.media}>
              <img src={event.Image} alt={event.Title} />
              {/* <CardMedia
                  component="img"
                  className={classes.media}
                  src={event.Image}
                  title={event.Title}
                  alt={event.Title}
              /> */}
            </Grid>
          </Grid>
        </Card>   
    );
}