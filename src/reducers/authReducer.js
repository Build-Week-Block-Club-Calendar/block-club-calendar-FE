import * as a from '../actions/'

const initialState = {
    user : { username: "",
        password: "",
        email: "",
        name: "",
        organizations: "",
        avatarUrl: "",
        role: "" },
    isPosting: false,
    error: ''
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case a.SIGNUP_START:
            return {
                ...state,
                isPosting: true,
                error: ''
            }
        case a.SIGNUP_SUCCESS:
            return {
                ...state,
                user: { ...state.user, username: action.payload.username },
                isPosting: false,
                error: ''
            }
        case a.SIGNUP_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state;
    }
}