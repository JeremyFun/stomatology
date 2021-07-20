import {
    SERVICES_ADD_REQUEST,
    SERVICES_ADD_SUCCESS,
    SERVICES_ADD_FAIL,
    GET_ALL_SERVICES_REQUEST,
    GET_ALL_SERVICES_SUCCESS,
    GET_ALL_SERVICES_FAIL,
    SERVICES_UPDATE_REQUEST,
    SERVICES_UPDATE_SUCCESS,
    SERVICES_UPDATE_FAIL,
    SERVICES_DELETE_REQUEST,
    SERVICES_DELETE_SUCCESS, SERVICES_DELETE_FAIL
} from "../constants/servicesConstants"
import axios from "axios"
import {
    COLORS_DELETE_FAIL,
    COLORS_DELETE_REQUEST, COLORS_DELETE_SUCCESS,
    COLORS_UPDATE_FAIL,
    COLORS_UPDATE_REQUEST,
    COLORS_UPDATE_SUCCESS
} from "../constants/colorsConstants";

export const addServices = (name) => async (dispatch) => {
    try {
        dispatch({
            type: SERVICES_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/services',
            {name},
            config
        )

        dispatch({
            type: SERVICES_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SERVICES_ADD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const getAllServices = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_SERVICES_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(
            '/api/services',
            config
        )

        dispatch({
            type: GET_ALL_SERVICES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_SERVICES_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateServices = (_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SERVICES_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.put(
            `/api/services`,
            _id,
            config
        )

        dispatch({
            type: SERVICES_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SERVICES_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const deleteServices = (_id) => async (dispatch) => {
    try {
        dispatch({
            type: SERVICES_DELETE_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.delete(`/api/services/${_id}` )
        dispatch({ type: SERVICES_DELETE_SUCCESS,  payload: data })
    } catch (error) {
        dispatch({
            type: SERVICES_DELETE_FAIL,
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
