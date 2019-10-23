import React from "react";
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from "../utils/PrivateRoute.js";
import Box from '@material-ui/core/Box';


//components
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import CalendarList from "../components/CalendarList";
import AddEvent from "../components/AddEvent";
// import SignupMUI from "../components/auth/Signu_mui";


const Content = () => {

  return (
    <Box my={2}>
      <Switch>
        {/* <Route path="/calendar" component={CalendarList} /> */}
        {/* <PrivateRoute path="/profile" component={UserProfile} /> */}
        {/* <Route path="/aboutus" component={AboutUs} /> */}
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/calendar" component={CalendarList} />
        <Route path="/add-event" component={AddEvent} />
        <Route component={CalendarList} />
      </Switch>
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