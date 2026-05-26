
import { NEW_USER_PENDING, NEW_USER_FULFILLED, NEW_USER_REJECTED } from "./actionCreator";
import {apiBaseUrl} from '../helper/util';


const initilState = {
    userData: null,
    isFetching: false,
    error: null,
}

export default function userReducer(state = initilState, action) {
    switch (action.type) {
        case NEW_USER_PENDING:    
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case NEW_USER_FULFILLED:
            return {
                ...state,
                isFetching: false,
                userData: action.payload
            };
        case NEW_USER_REJECTED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const userPendingGlob = () => ({ type: NEW_USER_PENDING });
export const userFulfilled = (data) => ({ type: NEW_USER_FULFILLED, payload: data });
export const userRejected = (error) => ({ type: NEW_USER_REJECTED, payload: error });

export const getCurrentUser = async (userId) => {
    try {
        if(!userId){
            throw new Error("User ID is required");
        }
        const response = await fetch(`${apiBaseUrl()}/user/show/${userId}`);
        const parseResponse = await response.json();
        return parseResponse.data;
    } catch (error) {
        return error.response;
    }
}