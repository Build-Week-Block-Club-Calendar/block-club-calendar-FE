import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function NavBar() {
  let history = useHistory();

  // functions and conditions for desktop menu
  const desktopView = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const navClick = (path) =>{
    history.push(path);
  }
  
  // functions and conditional for mobile menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mobileNavClick = (path) =>{
    history.push(path);
    handleClose();
  }

  if (desktopView) {
    return (
      <div>
        <Button color="inherit" onClick={() => navClick("/add-event")}>Add Event</Button>
        <Button color="inherit" onClick={() => navClick("/calendar")}>Calendar</Button>
      </div>
    )
  } else {
    return (
      <div>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon aria-controls="simple-menu" aria-haspopup="true" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => mobileNavClick("/calendar")}>Calendar</MenuItem>
          <MenuItem onClick={() => navClick("/add-event")}>Add Event</MenuItem>
        </Menu>
      </div>
    )
  }
}