import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import PrivateRoute from "../utils/PrivateRoute.js";
import axios from 'axios';

//components
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import Calendar from "../components/Calendar";
// import SignupMUI from "../components/auth/Signu_mui";


const Content = () => {
  return (
    <div className="content">

      <Switch>
        {/* <Route path="/calendar" component={CalendarList} /> */}
        {/* <PrivateRoute path="/profile" component={UserProfile} /> */}
        {/* <Route path="/aboutus" component={AboutUs} /> */}
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/calendar" component={Calendar} />
        <Route component={Calendar} />
      </Switch>

      {/* Test routes for react-router-dom */}
      {/* <div>
        <span>Test routes:</span>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/appraise">Appraise</NavLink>
        <NavLink to="/result">Result</NavLink>
        <NavLink to="/saved">Saved</NavLink>
      </div> */}

    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     isLoggedIn: state.login.isLoggedIn
//   };
// };

// export default connect(mapStateToProps)(Content);

export default Content;