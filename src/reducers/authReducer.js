import * as a from '../actions/'

const initialState = {
    user: { username: "",
        password: "",
        email: "",
        name: "",
        organizations: "",
        avatarUrl: "",
        role: "" },
    isSignedUp: false,
    isPosting: false,
    isError: false,
    error: ''
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case a.SIGNUP_START:
            return {
                ...state,
                isSignedUp: false,
                isPosting: true,
                isError: false,
            error: ''
            }
        case a.SIGNUP_SUCCESS:
            return {
                ...state,
                user: { ...state.user, username: action.payload.username },
                isSignedUp: true,
                isPosting: false,
                isError: false,
                error: ''
            }
        case a.SIGNUP_FAIL:
            return {
                ...state,
                isSignedUp: false,
                isPosting: false,
                isError: true,
                error: action.payload
            }
        default:
            return state;
    }
}