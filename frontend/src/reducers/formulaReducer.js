import {
    FORMULA_ADD_FAIL,
    FORMULA_ADD_REQUEST,
    FORMULA_ADD_SUCCESS, GET_ALL_FORMULA_FAIL,
    GET_ALL_FORMULA_REQUEST, GET_ALL_FORMULA_SUCCESS
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

