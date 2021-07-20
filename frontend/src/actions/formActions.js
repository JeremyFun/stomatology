import {
    FORM_ADD_REQUEST,
    FORM_ADD_SUCCESS,
    FORM_ADD_FAIL,
    GET_ALL_FORM_REQUEST,
    GET_ALL_FORM_SUCCESS,
    GET_ALL_FORM_FAIL,
    FORM_DELETE_FAIL,
    FORM_DELETE_SUCCESS,
    FORM_DELETE_REQUEST, FORM_UPDATE_FAIL, FORM_UPDATE_SUCCESS, FORM_UPDATE_REQUEST
} from "../constants/formConstants"
import axios from "axios"
import {
    COLORS_DELETE_FAIL,
    COLORS_DELETE_REQUEST, COLORS_DELETE_SUCCESS,
    COLORS_UPDATE_FAIL,
    COLORS_UPDATE_REQUEST,
    COLORS_UPDATE_SUCCESS
} from "../constants/colorsConstants";

export const addForm = (colors,
                        count,
                        costumer,
                        formula,
                        introduction,
                        pacient,
                        services,
                        technic,
                        time,
                        id) => async (dispatch) => {
    try {
        dispatch({
            type: FORM_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/form',
            {
                colors,
                count,
                costumer,
                formula,
                introduction,
                pacient,
                services,
                technic,
                time,
                id
            },
            config
        )

        dispatch({
            type: FORM_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FORM_ADD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const getAllForm = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_FORM_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(
            '/api/form',
            config
        )

        dispatch({
            type: GET_ALL_FORM_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_FORM_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateForm = (_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FORM_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.put(
            `/api/form`,
            _id,
            config
        )

        dispatch({
            type: FORM_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FORM_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const deleteForm = (_id) => async (dispatch) => {
    try {
        dispatch({
            type: FORM_DELETE_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.delete(`/api/form/${_id}` )
        dispatch({ type: FORM_DELETE_SUCCESS,  payload: data })
    } catch (error) {
        dispatch({
            type: FORM_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}




// export const logout = () => (dispatch) => {
//     localStorage.removeItem('userInfo')
//     dispatch({ type: USER_LOGOUT })
//     dispatch({ type: USER_DETAILS_RESET })
//     dispatch({ type: ORDER_LIST_MY_RESET })
//     dispatch({ type: USERS_LIST_RESET })
// }
//
//
// export const register = (name, email, password, isAdmin) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_REGISTER_REQUEST
//         })
//
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }
//
//         const { data } = await axios.post(
//             '/api/users',
//             { name, email, password, isAdmin },
//             config
//         )
//
//         dispatch({
//             type: USER_REGISTER_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: USER_REGISTER_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//         })
//     }
// }
//
// export const getUserProfile = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_DETAILS_REQUEST
//         })
//
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${userInfo.token}`
//             }
//         }
//
//         const { data } = await axios.get(
//             `/api/users/${id}`,
//             config
//         )
//
//         dispatch({
//             type: USER_DETAILS_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: USER_DETAILS_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//         })
//     }
// }
//
// export const updateUserProfile = (user) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_UPDATE_PROFILE_REQUEST
//         })
//
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${userInfo.token}`
//             }
//         }
//
//         const { data } = await axios.put(
//             `/api/users/profile`,
//             user,
//             config
//         )
//
//         dispatch({
//             type: USER_UPDATE_PROFILE_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: USER_UPDATE_PROFILE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//         })
//     }
// }
//
// export const getAllUsers = () => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USERS_LIST_REQUEST
//         })
//
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${userInfo.token}`
//             }
//         }
//
//         const { data } = await axios.get(`/api/users`, config )
//
//         dispatch({
//             type: USERS_LIST_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: USERS_LIST_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//         })
//     }
// }
//
// export const deleteUser = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_DELETE_REQUEST
//         })
//
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${userInfo.token}`
//             }
//         }
//
//         await axios.delete(`/api/users/${id}`, config )
//
//         dispatch({ type: USER_DELETE_SUCCESS })
//     } catch (error) {
//         dispatch({
//             type: USER_DELETE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//         })
//     }
// }
//
// export const updateUser = (user) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_UPDATE_REQUEST
//         })
//
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${userInfo.token}`
//             }
//         }
//         debugger
//         const {data} = await axios.put(`/api/users/${user._id}`, user, config )
//
//         dispatch({ type: USER_UPDATE_SUCCESS })
//
//         dispatch({type: USER_DETAILS_SUCCESS, payload: data})
//     } catch (error) {
//         dispatch({
//             type: USER_UPDATE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message
//         })
//     }
// }
