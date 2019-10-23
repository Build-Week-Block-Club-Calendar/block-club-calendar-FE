import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// import AddEventFab from '../components/events/AddEventFab'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // fixedWidth :{
  //   maxWidth: "1280px",
  //   margin: "auto"
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  let history = useHistory();
  
  const navClick = (path) =>{
    history.push(path);
  }

  return (
    <div className={classes.root}>
      {/* <AppBar position="fixed" className={classes.fixedWidth}> */}
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Block Club Calendar
          </Typography>
            {/* <AddEventFab /> */}
            <Button color="inherit" onClick={() => navClick("/add-event")}>Add Event</Button>
            <Button color="inherit" onClick={() => navClick("/calendar")}>Calendar</Button>
            <Button color="inherit" onClick={() => navClick("/login")}>Login</Button>
            <Button color="inherit" onClick={() => navClick("/signup")}>Sign up</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}