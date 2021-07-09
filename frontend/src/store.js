import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {
    userDeleteReducer,
    userDetailsReducer,
    userLoginReducer,
    userRegisterReducer,
    usersListReducer,
    userUpdateProfileReducer,
    userUpdateReducer
} from "./reducers/userReducer";
import {customerAddReducer, getAllCustomerReducer} from "./reducers/customerReducer";
import {getAllTechnicReducer, technicAddReducer} from "./reducers/technicReducer";
import {getAllServicesReducer, servicesAddReducer} from "./reducers/servicesReducer";
import {colorsAddReducer, colorsUpdateReducer, getAllColorsReducer} from "./reducers/colorsReducer";
import {formulaAddReducer, getAllFormulaReducer} from "./reducers/formulaReducer";
import {countAddReducer, getAllCountReducer} from "./reducers/countReducer";
import {formAddReducer, getAllFormReducer} from "./reducers/formReducer";

const reducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    usersList: usersListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    customer: customerAddReducer,
    customerAll: getAllCustomerReducer,
    technic: technicAddReducer,
    technicAll: getAllTechnicReducer,
    services: servicesAddReducer,
    servicesAll: getAllServicesReducer,
    colors: colorsAddReducer,
    colorsAll: getAllColorsReducer,
    updateColors: colorsUpdateReducer,
    formula: formulaAddReducer,
    formulaAll: getAllFormulaReducer,
    count: countAddReducer,
    countAll: getAllCountReducer,
    form: formAddReducer,
    formAll: getAllFormReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null



const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
