import { axiosWithAuth } from "../utils/axiosWithAuth";

// eventReducer create event actions
export const GET_GOING_START = "GET_GOING_START";
export const GET_GOING_SUCCESS = "GET_GOING_SUCCESS";

export const POST_GOING_START = "POST_GOING_START";

export const GOING_SUCCESS = "GOING_SUCCESS";
export const GOING_FAIL = "GOING_FAIL";


export const getGoingList = () => dispatch => {
  dispatch({ type: GET_GOING_START });
  axiosWithAuth()
    .get(`/api/going`)
    .then(res => {
      dispatch({ type: GET_GOING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GOING_FAIL, payload: err })
    });
};

export const postGoing = (id) => dispatch => {
  dispatch({ type: POST_GOING_START });
  axiosWithAuth()
    .post(`/api/going`, {"event_id": id})
    .then(res => {
      dispatch({ type: GOING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GOING_FAIL, payload: err })
    });
};
