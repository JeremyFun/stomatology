import {
    SERVICES_ADD_FAIL,
    SERVICES_ADD_REQUEST,
    SERVICES_ADD_SUCCESS, GET_ALL_SERVICES_FAIL,
    GET_ALL_SERVICES_REQUEST, GET_ALL_SERVICES_SUCCESS
} from "../constants/servicesConstants";

export const servicesAddReducer = (state = { }, action) => {
    switch (action.type) {
        case SERVICES_ADD_REQUEST:
            return { loading: true }
        case SERVICES_ADD_SUCCESS:
            return { loading: false, services: action.payload }
        case SERVICES_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllServicesReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_ALL_SERVICES_REQUEST:
            return { loading: true }
        case GET_ALL_SERVICES_SUCCESS:
            return { loading: false, servicesAll: action.payload }
        case GET_ALL_SERVICES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

