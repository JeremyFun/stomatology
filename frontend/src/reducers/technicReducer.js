import {
    TECHNIC_ADD_FAIL,
    TECHNIC_ADD_REQUEST,
    TECHNIC_ADD_SUCCESS, GET_ALL_TECHNIC_FAIL,
    GET_ALL_TECHNIC_REQUEST, GET_ALL_TECHNIC_SUCCESS,
    TECHNIC_DELETE_FAIL,
    TECHNIC_DELETE_REQUEST, TECHNIC_DELETE_SUCCESS,
    TECHNIC_UPDATE_FAIL,
    TECHNIC_UPDATE_REQUEST,
    TECHNIC_UPDATE_SUCCESS
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

export const technicUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case TECHNIC_UPDATE_REQUEST:
            return {loading: true}
        case TECHNIC_UPDATE_SUCCESS:
            return {loading: false, technicUpdate: action.payload}
        case TECHNIC_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const technicDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TECHNIC_DELETE_REQUEST:
            return {loading: true}
        case TECHNIC_DELETE_SUCCESS:
            return {loading: false, technicDelete: action.payload}
        case TECHNIC_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
