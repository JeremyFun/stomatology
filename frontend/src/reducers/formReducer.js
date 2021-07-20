import {
    FORM_ADD_FAIL,
    FORM_ADD_REQUEST,
    FORM_ADD_SUCCESS, GET_ALL_FORM_FAIL,
    GET_ALL_FORM_REQUEST, GET_ALL_FORM_SUCCESS,
    FORM_DELETE_FAIL,
    FORM_DELETE_REQUEST, FORM_DELETE_SUCCESS,
    FORM_UPDATE_FAIL,
    FORM_UPDATE_REQUEST,
    FORM_UPDATE_SUCCESS
} from "../constants/formConstants";

export const formAddReducer = (state = { }, action) => {
    switch (action.type) {
        case FORM_ADD_REQUEST:
            return { loading: true }
        case FORM_ADD_SUCCESS:
            return { loading: false, form: action.payload }
        case FORM_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllFormReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_ALL_FORM_REQUEST:
            return { loading: true }
        case GET_ALL_FORM_SUCCESS:
            return { loading: false, formAll: action.payload }
        case GET_ALL_FORM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const formUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case FORM_UPDATE_REQUEST:
            return {loading: true}
        case FORM_UPDATE_SUCCESS:
            return {loading: false, formUpdate: action.payload}
        case FORM_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const formDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case FORM_DELETE_REQUEST:
            return {loading: true}
        case FORM_DELETE_SUCCESS:
            return {loading: false, formDelete: action.payload}
        case FORM_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
