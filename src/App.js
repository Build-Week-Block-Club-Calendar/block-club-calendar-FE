import React from 'react';
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './pages/Appbar';
import Content from './pages/Content';



const useStyles = makeStyles(theme => ({
  root: {
      background: '#ffffe4',
      // maxWidth: "1280px",
      // margin: "auto"
      
  },
}));

function App() {
  const classes = useStyles();

  return (
    // <Container maxWidth="lg">
    <Paper className={classes.root}>
      <Appbar />
      <Content />
      {/* <Footer /> */}
    </Paper>
    // </Container>
  );
}

export default App;
