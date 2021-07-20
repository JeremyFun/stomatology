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
import {
    customerAddReducer,
    customerDeleteReducer,
    customerUpdateReducer,
    getAllCustomerReducer
} from "./reducers/customerReducer";
import {
    getAllTechnicReducer,
    technicAddReducer,
    technicDeleteReducer,
    technicUpdateReducer
} from "./reducers/technicReducer";
import {
    getAllServicesReducer,
    servicesAddReducer,
    servicesDeleteReducer,
    servicesUpdateReducer
} from "./reducers/servicesReducer";
import {
    colorsAddReducer,
    colorsDeleteReducer,
    colorsUpdateReducer,
    getAllColorsReducer
} from "./reducers/colorsReducer";
import {
    formulaAddReducer,
    formulaDeleteReducer,
    formulaUpdateReducer,
    getAllFormulaReducer
} from "./reducers/formulaReducer";
import {countAddReducer, countDeleteReducer, countUpdateReducer, getAllCountReducer} from "./reducers/countReducer";
import {formAddReducer, formUpdateReducer, getAllFormReducer} from "./reducers/formReducer";

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
    customerUpdate: customerUpdateReducer,
    customerDelete: customerDeleteReducer,
    technic: technicAddReducer,
    technicAll: getAllTechnicReducer,
    technicUpdate: technicUpdateReducer,
    technicDelete: technicDeleteReducer,
    services: servicesAddReducer,
    servicesAll: getAllServicesReducer,
    servicesUpdate: servicesUpdateReducer,
    servicesDelete: servicesDeleteReducer,
    colors: colorsAddReducer,
    colorsAll: getAllColorsReducer,
    updateColors: colorsUpdateReducer,
    deleteColors: colorsDeleteReducer,
    formula: formulaAddReducer,
    formulaAll: getAllFormulaReducer,
    formulaUpdate: formulaUpdateReducer,
    formulaDelete: formulaDeleteReducer,
    count: countAddReducer,
    countAll: getAllCountReducer,
    countUpdate: countUpdateReducer,
    countDelete: countDeleteReducer,
    form: formAddReducer,
    formAll: getAllFormReducer,
    formUpdate: formUpdateReducer,
    formDelete: formulaDeleteReducer
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
