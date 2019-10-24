import * as a from '../actions/goingActions'

const initialState = {
    goingList: [],
    isFetching: false,
    isPosting: false,
    isSuccessful: false,
    isError: false,
    error: ''
}

export const goingReducer = (state = initialState, action) => {
    switch(action.type){
        case a.GET_GOING_START:
            return {
                ...state,
                isFetching: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.GET_GOING_SUCCESS:
            return {
                ...state,
                goingList: action.payload,
                isFetching: false,
                isError: false,
                error: ''
            }
        case a.POST_GOING_START:
            return {
                ...state,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.GOING_SUCCESS:
            return {
                ...state,
                isPosting: false,
                isSuccessful: true,
                isError: false,
                error: ''
            }
        case a.GOING_FAIL:
            return {
                ...state,
                isPosting: false,
                isSuccessful: false,
                isError: true,
                error: action.payload
            }
        default:
            return state;
    }
}