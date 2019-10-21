import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import axios from "axios";
import decode from "jwt-decode";

// authReducer signup actions
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post('/api/auth/register', credentials)
    .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
};

// export const GET_HOUSE_START = "GET_HOUSE_START";
// export const GET_HOUSE_SUCCESS = "GET_HOUSE_SUCCESS";
// export const GET_HOUSE_FAIL = "GET_HOUSE_FAIL";

// export const getHouse = () => dispatch => {
//   dispatch({ type: GET_HOUSE_START });
//   axiosWithAuth()
//     .get(`/houses`)
//     .then(res => console.log("GETHOUSE RES: ", res.data))
//     .catch(err => dispatch({ type: GET_HOUSE_FAIL, payload: err }));
// };



// export const LOGIN_START = "LOGIN_START";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_DECODE = "LOGIN_DECODE";
// export const LOGIN_FAIL = "LOGIN_FAIL";

// //posting to BE api for token
// export const login = (creds, history) => dispatch => {
//   // console.log("LOGIN: HISTORY: ", history);
//   dispatch({ type: LOGIN_START });
//   axios
//     .post(`https://appraisersbff.herokuapp.com/auth/login`, creds)
//     .then(res => {
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
//       localStorage.setItem("token", res.data.token);
//       // console.log("decodedToken: ", decode(res.data.token));
//       dispatch({ type: LOGIN_DECODE, payload: decode(res.data.token) });
//       history.push("/appraise");
//     })
//     .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
// };