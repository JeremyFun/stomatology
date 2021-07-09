import {
    FORM_ADD_FAIL,
    FORM_ADD_REQUEST,
    FORM_ADD_SUCCESS, GET_ALL_FORM_FAIL,
    GET_ALL_FORM_REQUEST, GET_ALL_FORM_SUCCESS
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

