import {
    FORMULA_ADD_FAIL,
    FORMULA_ADD_REQUEST,
    FORMULA_ADD_SUCCESS, GET_ALL_FORMULA_FAIL,
    GET_ALL_FORMULA_REQUEST, GET_ALL_FORMULA_SUCCESS,
    FORMULA_DELETE_FAIL,
    FORMULA_DELETE_REQUEST, FORMULA_DELETE_SUCCESS,
    FORMULA_UPDATE_FAIL,
    FORMULA_UPDATE_REQUEST,
    FORMULA_UPDATE_SUCCESS
} from "../constants/formulaConstants";


export const formulaAddReducer = (state = { }, action) => {
    switch (action.type) {
        case FORMULA_ADD_REQUEST:
            return { loading: true }
        case FORMULA_ADD_SUCCESS:
            return { loading: false, formula: action.payload }
        case FORMULA_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllFormulaReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_ALL_FORMULA_REQUEST:
            return { loading: true }
        case GET_ALL_FORMULA_SUCCESS:
            return { loading: false, formulaAll: action.payload }
        case GET_ALL_FORMULA_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const formulaUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case FORMULA_UPDATE_REQUEST:
            return {loading: true}
        case FORMULA_UPDATE_SUCCESS:
            return {loading: false, formulaUpdate: action.payload}
        case FORMULA_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const formulaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case FORMULA_DELETE_REQUEST:
            return {loading: true}
        case FORMULA_DELETE_SUCCESS:
            return {loading: false, formulaDelete: action.payload}
        case FORMULA_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
