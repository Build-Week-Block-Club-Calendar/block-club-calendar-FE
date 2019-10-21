import axios from 'axios';

// auth action types
export const START_POSTING = 'START_POSTING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

// auth action creators
// standard form for asyc axios call with thunk
// thunk lets us return functions as actions well as regular objects
// export const fetchBeer = () => dispatch => {
//     dispatch({ type: START_FETCHING });
//     axios
//         .get('https://api.openbrewerydb.org/breweries')
//         .then(res=> dispatch({ type: FETCH_SUCCESS, payload: res.data }))
//         .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));

// };