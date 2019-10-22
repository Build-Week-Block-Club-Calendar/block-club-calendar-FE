import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  media: {
    border: "1px solid black"
  },
  bottomBlock: {
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

export default function CalendarEvent(props) {
  const classes = useStyles();
  const { event } = props;

    return (
        <Card className={classes.card}>
          <div className={classes.topBlock}>
            <div className={classes.details}>
              <CardHeader
                  avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                  </Avatar>
                  }
                  title={event.Title}
                  subheader={event.Date}
              />
              <CardContent>
                  <Typography variant="body2" component="p">
                  Location: {event.Location}
                  </Typography>
                  <Typography variant="body2" component="p">
                  Time: {event.Time}
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="going to event">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
              </CardActions>
            </div>
            <CardMedia
                className={classes.media}
                image={event.Image}
                title={event.Title}
            />
          </div>
          <div className={classes.bottomBlock}>
            <p>{event.Description}</p>
          </div>
        </Card>   
    );
}