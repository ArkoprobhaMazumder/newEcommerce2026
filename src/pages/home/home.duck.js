

import { GET_HOME_NAME, CHANGE_HOME_NAME, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_PENDING } from '../../redux/actionCreator';






const initialState = {
    name: 'home',
    fetchProductPending: false,
    fetchProductError: null,
    fetchProductSuccess: false,
    products: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_NAME:
            return {
                ...state,
                name: 'home',
            };
        case CHANGE_HOME_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case GET_PRODUCTS_PENDING:
            return {
                ...state,
                fetchProductPending: true,
                fetchProductError: null,
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                fetchProductPending: false,
                fetchProductError: null,
                fetchProductSuccess: true,
                products: action.payload,
            };
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                fetchProductPending: false,
                fetchProductError: action.payload,
                fetchProductSuccess: false,
            };
        default:
            return state;
    }
};


export const getHomeName = () => ({
    type: GET_HOME_NAME,
});

export const changeHomeName = (name) => ({
    type: CHANGE_HOME_NAME,
    payload: name,
});

export const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

export const getProductsPending = () => ({
    type: GET_PRODUCTS_PENDING,
})

export const getProducts = async (dispatch) => {
    getProductsPending();
    try {
        const response = await fetch('https://fake-store-api.mock.beeceptor.com/api/products',{
            method: 'GET', 
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        dispatch(getProductsSuccess(data));
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: error.message,
        });
    }

}






export default homeReducer;