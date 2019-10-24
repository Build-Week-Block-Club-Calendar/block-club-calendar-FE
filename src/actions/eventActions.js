import { axiosWithAuth } from "../utils/axiosWithAuth";

// eventReducer create event actions
export const GET_EVENT_START = "GET_EVENT_START";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";

export const POST_EVENT_START = "POST_EVENT_START";

export const PUT_EVENT_START = "PUT_EVENT_START";
export const PUT_EVENT_ADMIN_START = "PUT_EVENT_ADMIN_START";

export const DEL_EVENT_START = "DEL_EVENT_START";
export const DEL_EVENT_ADMIN_START = "DEL_EVENT_ADMIN_START";

export const EVENT_SUCCESS = "EVENT_SUCCESS";
export const EVENT_FAIL = "EVENT_FAIL";

export const getEventList = () => dispatch => {
  dispatch({ type: GET_EVENT_START });
  axiosWithAuth()
    .get(`/api/events`)
    .then(res => {
      // console.log("GET_EVENT RES: ", res.data);
      dispatch({ type: GET_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log("I'm an error for postEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};

export const postEvent = (newEvent) => dispatch => {
  dispatch({ type: POST_EVENT_START, payload: newEvent });
  axiosWithAuth()
    .post(`/api/events`, newEvent)
    .then(res => {
      // console.log("POST_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log("I'm an error for postEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};

export const updateEvent = (editedEvent) => dispatch => {
  dispatch({ type: PUT_EVENT_START, payload: editedEvent });
  axiosWithAuth()
    .put(`/api/events/${editedEvent.id}`, editedEvent)
    .then(res => {
      // console.log("PUT_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log("I'm an error for putEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};

export const updateEventAdmin = (editedEvent) => dispatch => {
  dispatch({ type: PUT_EVENT_ADMIN_START, payload: editedEvent });
  axiosWithAuth()
    .put(`/api/admin/${editedEvent.id}`, editedEvent)
    .then(res => {
      // console.log("PUT_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log("I'm an error for putEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};

export const deleteEvent = (editedEvent) => dispatch => {
  dispatch({ type: DEL_EVENT_START, payload: editedEvent });
  axiosWithAuth()
    .delete(`/api/events/${editedEvent.id}`)
    .then(res => {
      // console.log("DELETE_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log("I'm an error for deleteEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};

export const deleteEventAdmin = (editedEvent) => dispatch => {
  dispatch({ type: DEL_EVENT_ADMIN_START, payload: editedEvent });
  axiosWithAuth()
    .delete(`/api/admin/${editedEvent.id}`)
    .then(res => {
      // console.log("DELETE_EVENT RES: ", res.data);
      dispatch({ type: EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log("I'm an error for deleteEvent", err);
      dispatch({ type: EVENT_FAIL, payload: err })
    });
};