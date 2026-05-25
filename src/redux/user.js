
import { NEW_USER_PENDING, NEW_USER_FULFILLED, NEW_USER_REJECTED } from "./actionCreator";


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

export const newUserPendingGlob = () => ({ type: NEW_USER_PENDING });
export const newUserFulfilled = (data) => ({ type: NEW_USER_FULFILLED, payload: data });
export const newUserRejected = (error) => ({ type: NEW_USER_REJECTED, payload: error });

export const getCurrentUser = async (userId) => {
    try {
        if(!userId){
            throw new Error("User ID is required");
        }
        console.log("Fetching user data with ID:", userId);
    } catch (error) {
        return error.response;
    }
}