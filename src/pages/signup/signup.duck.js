

import { NEW_USER_SIGNUP_PENDING, NEW_USER_SIGNUP_SUCCESS, NEW_USER_SIGNUP_ERROR } from "../../redux/actionCreator";
import { apiBaseUrl } from "../../helper/util";
import axios from "axios";





const initialState = {
    signupPending: false,
    signupError: null,
    signupSuccess: false,
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_USER_SIGNUP_PENDING:
            return {
                ...state,
                signupPending: true,
                signupError: null
            };
        case NEW_USER_SIGNUP_SUCCESS:
            return {
                ...state,
                signupPending: false,
                signupSuccess: true
            };
        case NEW_USER_SIGNUP_ERROR:
            return {
                ...state,
                signupPending: false,
                signupError: action.payload
            };
        default:
            return state;
    }
};

export const newUserSuccess = () => ({ type: NEW_USER_SIGNUP_SUCCESS });
export const newUserPending = () => ({ type: NEW_USER_SIGNUP_PENDING });
export const newUserError = (err) => ({ type: NEW_USER_SIGNUP_ERROR, payload: err });


export const userSignUp = async (userInfo) => {
    try {
        const url = `${apiBaseUrl()}/user/signup`;
        const response = await axios.post(url, { ...userInfo, name: userInfo.userName }, { headers: { "Content-Type": 'application/json' } });
        if (response.status === 201) {
            return response;
        }
    } catch (error) {
        return error.response;
    }
}




export default signupReducer;