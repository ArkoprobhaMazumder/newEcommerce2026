import { FETCH_LOGIN_ERROR, FETCH_LOGIN_PENDING, FETCH_LOGIN_SUCCESS } from "../../redux/actionCreator";
import { apiBaseUrl } from "../../helper/util";
import axios from "axios";


const initialState = {
    fetchLogin: false,
    loginSuccess: false,
    loginError: null,
}


export default function loginReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_LOGIN_PENDING:
            return {
                ...state,
                fetchLogin: true
            };

        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                fetchLogin: false,
                loginSuccess: true,
                loginError: null
            };

        case FETCH_LOGIN_ERROR:
            return {
                ...state,
                fetchLogin: false,
                loginSuccess: false,
                loginError: action.payload
            };

        default:
            return state;
    }
}

export const userLogin = async (userInfo) => {
    try {
        const url = `${apiBaseUrl()}/user/login`;
        const response = await axios.post(url, { email: userInfo.email, password: userInfo.password, type: userInfo.type }, { headers: { "Content-Type": 'application/json' } });
        return response;
    } catch (error) {
        return error.response;
    }
}