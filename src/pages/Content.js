import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import PrivateRoute from "../utils/PrivateRoute.js";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


//components
import Signup from "../components/auth/Signup";
import SignupReducer from "../components/auth/Signup_reducer";
import Login from "../components/auth/Login";
import CalendarList from "../components/CalendarList";
// import SignupMUI from "../components/auth/Signu_mui";


const Content = () => {

  return (
    <Box my={2}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="flex-start"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Switch>
            {/* <Route path="/calendar" component={CalendarList} /> */}
            {/* <PrivateRoute path="/profile" component={UserProfile} /> */}
            {/* <Route path="/aboutus" component={AboutUs} /> */}
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/signup-reducer" component={SignupReducer} />
            <Route path="/login" component={Login} />
            <Route path="/calendar" component={CalendarList} />
            <Route component={CalendarList} />
          </Switch>
        </Grid>
      </Grid> 
    </Box>
  );
}


// const mapStateToProps = state => {
//   return {
//     isLoggedIn: state.login.isLoggedIn
//   };
// };

// export default connect(mapStateToProps)(Content);

export default Content;