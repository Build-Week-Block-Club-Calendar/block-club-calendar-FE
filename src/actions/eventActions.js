import { axiosWithAuth } from "../utils/axiosWithAuth";
import decode from "jwt-decode";

// eventReducer create event actions
export const POST_EVENT_START = "POST_EVENT_START";
export const PUT_EVENT_START = "PUT_EVENT_START";
export const DEL_EVENT_START = "DEL_EVENT_START";
export const EVENT_SUCCESS = "POST_EVENT_SUCCESS";
export const EVENT_FAIL = "POST_EVENT_FAIL";

export const postEvent = (newEvent) => dispatch => {
  dispatch({ type: POST_EVENT_START, payload: newEvent });
  axiosWithAuth()
    .post(`/api/events`, newEvent)
    .then(res => {
      console.log("POST_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("I'm an error for postEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};

export const updateEvent = (editedEvent) => dispatch => {
  dispatch({ type: PUT_EVENT_START, payload: editedEvent });
  axiosWithAuth()
    .put(`/api/events`, editedEvent)
    .then(res => {
      console.log("PUT_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("I'm an error for putEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};

export const deleteEvent = (id) => dispatch => {
  dispatch({ type: DELETE_EVENT_START, payload: editedEvent });
  axiosWithAuth()
    .put(`/api/events`, editedEvent)
    .then(res => {
      console.log("DELETE_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("I'm an error for deleteEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};