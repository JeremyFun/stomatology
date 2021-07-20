import {
    COLORS_ADD_REQUEST,
    COLORS_ADD_SUCCESS,
    COLORS_ADD_FAIL,
    GET_ALL_COLORS_REQUEST,
    GET_ALL_COLORS_SUCCESS,
    GET_ALL_COLORS_FAIL,
    COLORS_UPDATE_REQUEST,
    COLORS_UPDATE_SUCCESS, COLORS_UPDATE_FAIL, COLORS_DELETE_REQUEST, COLORS_DELETE_SUCCESS, COLORS_DELETE_FAIL
} from "../constants/colorsConstants"
import axios from "axios"

export const addColors = (name) => async (dispatch) => {
    try {
        dispatch({
            type: COLORS_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/colors',
            {name},
            config
        )

        dispatch({
            type: COLORS_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COLORS_ADD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const getAllColors = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_COLORS_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(
            '/api/colors',
            config
        )

        dispatch({
            type: GET_ALL_COLORS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_COLORS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateColors = (_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COLORS_UPDATE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.put(
            `/api/colors`,
            _id,
            config
        )

        dispatch({
            type: COLORS_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COLORS_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const deleteColors = (_id) => async (dispatch) => {
    try {
        dispatch({
            type: COLORS_DELETE_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.delete(`/api/colors/${_id}` )
        dispatch({ type: COLORS_DELETE_SUCCESS,  payload: data })
    } catch (error) {
        dispatch({
            type: COLORS_DELETE_FAIL,
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
