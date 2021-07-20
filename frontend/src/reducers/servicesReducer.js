import {
    SERVICES_ADD_FAIL,
    SERVICES_ADD_REQUEST,
    SERVICES_ADD_SUCCESS, GET_ALL_SERVICES_FAIL,
    GET_ALL_SERVICES_REQUEST, GET_ALL_SERVICES_SUCCESS,
    SERVICES_DELETE_FAIL,
    SERVICES_DELETE_REQUEST, SERVICES_DELETE_SUCCESS,
    SERVICES_UPDATE_FAIL,
    SERVICES_UPDATE_REQUEST,
    SERVICES_UPDATE_SUCCESS
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

export const servicesUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case SERVICES_UPDATE_REQUEST:
            return {loading: true}
        case SERVICES_UPDATE_SUCCESS:
            return {loading: false, servicesUpdate: action.payload}
        case SERVICES_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const servicesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SERVICES_DELETE_REQUEST:
            return {loading: true}
        case SERVICES_DELETE_SUCCESS:
            return {loading: false, servicesDelete: action.payload}
        case SERVICES_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
