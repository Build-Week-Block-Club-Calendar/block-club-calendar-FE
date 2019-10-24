import * as a from '../actions/eventActions'

const initialState = {
    eventList: [],
    event: {
        Title: "Party",
        Date: "Tomorrow",
        Time: "5pm",
        Location: "Party Center",
        Description: "Dope Party",
        Link: "google.com",
        Image: "image.png"},
    isFetching: false,
    isPosting: false,
    isSuccessful: false,
    isError: false,
    error: ''
}

export const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case a.GET_EVENT_START:
            return {
                ...state,
                isFetching: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.GET_EVENT_SUCCESS:
            return {
                ...state,
                eventList: action.payload,
                isFetching: false,
                isError: false,
                error: ''
            }
        case a.POST_EVENT_START:
            return {
                ...state,
                event: action.payload,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.PUT_EVENT_START:
            return {
                ...state,
                event: action.payload,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.PUT_EVENT_ADMIN_START:
            return {
                ...state,
                event: action.payload,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.DEL_EVENT_START:
            return {
                ...state,
                event: action.payload,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.DEL_EVENT_ADMIN_START:
            return {
                ...state,
                event: action.payload,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.EVENT_SUCCESS:
            return {
                ...state,
                isPosting: false,
                isSuccessful: true,
                isError: false,
                error: ''
            }
        case a.EVENT_FAIL:
            return {
                ...state,
                isPosting: false,
                isSuccessful: false,
                isError: true,
                error: action.payload.response.data.message
            }
        default:
            return state;
    }
}