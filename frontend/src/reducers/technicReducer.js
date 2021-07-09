import {
    TECHNIC_ADD_FAIL,
    TECHNIC_ADD_REQUEST,
    TECHNIC_ADD_SUCCESS, GET_ALL_TECHNIC_FAIL,
    GET_ALL_TECHNIC_REQUEST, GET_ALL_TECHNIC_SUCCESS
} from "../constants/technicConstants";

export const technicAddReducer = (state = { }, action) => {
    switch (action.type) {
        case TECHNIC_ADD_REQUEST:
            return { loading: true }
        case TECHNIC_ADD_SUCCESS:
            return { loading: false, technic: action.payload }
        case TECHNIC_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllTechnicReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_ALL_TECHNIC_REQUEST:
            return { loading: true }
        case GET_ALL_TECHNIC_SUCCESS:
            return { loading: false, technicAll: action.payload }
        case GET_ALL_TECHNIC_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

