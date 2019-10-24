import * as a from '../actions/authActions'

const initialState = {
    user: { username: "",
        password: "",
        email: "",
        name: "",
        organizations: "",
        avatarUrl: "",
        role: "" },
    decodedToken: {
            token: {},
        },
    isPosting: false,
    isSignedUp: false,
    isLoggedIn: false,
    isError: false,
    error: ''
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case a.SIGNUP_START:
            return {
                ...state,
                isPosting: true,
                isSignedUp: false,
                isError: false,
            error: ''
            }
        case a.SIGNUP_SUCCESS:
            return {
                ...state,
                user: { ...state.user, username: action.payload.username },
                isPosting: false,
                isSignedUp: true,
                isError: false,
                error: ''
            }
        case a.SIGNUP_FAIL:
            return {
                ...state,
                isPosting: false,
                isSignedUp: false,
                isError: true,
                error: action.payload.response.data.message
            }
        case a.LOGIN_START:
            return {
                ...state,
                isPosting: true,
                isError: false,
                error: ''
            };
        case a.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                isPosting: false,
                isLoggedIn: true,
                isError: false,
                error: ''
            };
        case a.LOGIN_DECODE:
            return {
                ...state,
                decodedToken: {
                    token: action.payload
                }
            };
        case a.LOGIN_FAIL:
            return {
                ...state,
                isPosting: false,
                isLoggedIn: false,
                isError: true,
                error: action.payload.response.data.message
            };
        default:
            return state;
    }
}