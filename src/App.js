import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './pages/Navbar';
import Content from './pages/Content';


const useStyles = makeStyles(theme => ({
  root: {
      background: '#e8f5e9'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
    <Paper className={classes.root}>
      <Navbar />
      <Content />
      {/* <Footer /> */}
    </Paper>
    </Container>
  );
}

export default App;
