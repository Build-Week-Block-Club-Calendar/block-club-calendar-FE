import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { red } from '@material-ui/core/colors';

import EditEventButton from './events/EditEventButton';

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
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
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
    border: "1px solid black"
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
  
  // console.log("props from event", props)

    return (
        <Card className={classes.card}>
          <div className={classes.topBlock}>
            <CardContent className={classes.content}>
              <Typography variant="h4" component="h3" align ="center" gutterBottom={true}>
                {event.Title}
              </Typography>
              <div className={classes.details}>
                <Typography variant="body2" component="p">
                  Location: {event.Location}
                </Typography>
                <Typography variant="body2" component="p">
                  Date: {event.Date}
                </Typography>
                <Typography variant="body2" component="p">
                  Time: {event.Time}
                </Typography>
                <Typography variant="body2" component="p">
                  Description: {event.Description}
                </Typography>
              </div>
              <CardActions className={classes.controls}>
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<DoneOutlineIcon />}
                >
                  Going
                </Button>
                <EditEventButton values={event}/>
                {/* <Button 
                  variant="contained" 
                  color="secondary"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button> */}
                <DeleteButton
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  onClick={() => props.delete(event)}
                > 
                  Delete
                </DeleteButton>
              </CardActions>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={event.Image}
                title={event.Title}
            />
          </div>
        </Card>   
    );
}