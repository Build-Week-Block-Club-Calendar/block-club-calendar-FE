import * as a from '../actions/'

const initialState = {
    isPosting: false,
    error: '',
    user: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case a.START_POSTING:
            return {
                ...state,
                isPosting: true,
                error: ''
            }
        case a.POST_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: '',
                user: action.payload
            }
        case a.POST_FAILURE:
            return {
                ...state,
                isPosting: false,
                user: action.payload
            }
        default:
            return state;
    }
}