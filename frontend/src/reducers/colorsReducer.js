import {
    COLORS_ADD_FAIL,
    COLORS_ADD_REQUEST,
    COLORS_ADD_SUCCESS, COLORS_UPDATE_FAIL, COLORS_UPDATE_REQUEST, COLORS_UPDATE_SUCCESS, GET_ALL_COLORS_FAIL,
    GET_ALL_COLORS_REQUEST, GET_ALL_COLORS_SUCCESS
} from "../constants/colorsConstants";

export const colorsAddReducer = (state = { }, action) => {
    switch (action.type) {
        case COLORS_ADD_REQUEST:
            return { loading: true }
        case COLORS_ADD_SUCCESS:
            return { loading: false, colors: action.payload }
        case COLORS_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllColorsReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_ALL_COLORS_REQUEST:
            return { loading: true }
        case GET_ALL_COLORS_SUCCESS:
            return { loading: false, colorsAll: action.payload }
        case GET_ALL_COLORS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const colorsUpdateReducer = (state = { }, action) => {
    switch (action.type) {
        case COLORS_UPDATE_REQUEST:
            return { loading: true }
        case COLORS_UPDATE_SUCCESS:
            return { loading: false, colorsUpdate: action.payload }
        case COLORS_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
