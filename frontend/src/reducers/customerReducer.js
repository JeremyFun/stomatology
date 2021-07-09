import {
    CUSTOMER_ADD_FAIL,
    CUSTOMER_ADD_REQUEST,
    CUSTOMER_ADD_SUCCESS, GET_ALL_CUSTOMER_FAIL,
    GET_ALL_CUSTOMER_REQUEST, GET_ALL_CUSTOMER_SUCCESS
} from "../constants/customerConstants";

export const customerAddReducer = (state = { }, action) => {
    switch (action.type) {
        case CUSTOMER_ADD_REQUEST:
            return { loading: true }
        case CUSTOMER_ADD_SUCCESS:
            return { loading: false, customer: action.payload }
        case CUSTOMER_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllCustomerReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_ALL_CUSTOMER_REQUEST:
            return { loading: true }
        case GET_ALL_CUSTOMER_SUCCESS:
            return { loading: false, customerAll: action.payload }
        case GET_ALL_CUSTOMER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

