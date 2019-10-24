import { axiosWithAuth } from "../utils/axiosWithAuth";
import decode from "jwt-decode";

// authReducer signup actions
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });
  axiosWithAuth()
    .post('/api/auth/register', credentials)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
      // console.log(res.data)
      })
    .catch(err => {
      dispatch({ type: SIGNUP_FAIL, payload: err })
      // console.log(err)
      });
};

// authReducer login actions
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_DECODE = "LOGIN_DECODE";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const logIn = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('/api/auth/login', credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem("token", res.data.token);
      // console.log(res.data)
      dispatch({ type: LOGIN_DECODE, payload: decode(res.data.token) })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err })
      // console.log(err)
    });
};