import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SignupForm from './SignupForm';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
  }));

function Signup (props) {
    const classes = useStyles();

    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="flex-start"
          style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} med={4}>
                <Paper className={classes.root}>
                    <Typography variant="h4" component="h2">
                    Sign Up
                    </Typography>
                    <SignupForm />
                </Paper>
             </Grid>
        </Grid> 
    )

}


export default Signup;