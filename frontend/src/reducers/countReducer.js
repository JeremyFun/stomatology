import {
    COUNT_ADD_FAIL,
    COUNT_ADD_REQUEST,
    COUNT_ADD_SUCCESS, GET_ALL_COUNT_FAIL,
    GET_ALL_COUNT_REQUEST, GET_ALL_COUNT_SUCCESS
} from "../constants/countConstants";

export const countAddReducer = (state = { }, action) => {
    switch (action.type) {
        case COUNT_ADD_REQUEST:
            return { loading: true }
        case COUNT_ADD_SUCCESS:
            return { loading: false, count: action.payload }
        case COUNT_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllCountReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_ALL_COUNT_REQUEST:
            return { loading: true }
        case GET_ALL_COUNT_SUCCESS:
            return { loading: false, countAll: action.payload }
        case GET_ALL_COUNT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

