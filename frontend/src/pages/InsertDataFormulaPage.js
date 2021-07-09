import React, {useEffect, useState} from "react";
import {Tabs} from 'antd';
import CustomerComponents from "../components/CustomerComponents";
import {useDispatch, useSelector} from "react-redux";
import {getAllCustomer} from "../actions/customerActions";
import {getAllTechnic} from "../actions/technicActions";
import TechnicComponents from "../components/TechnicComponents";
import FormulaComponents from "../components/FormulaComponents";
import {getAllFormula} from "../actions/formulaActions";
import {useHistory} from "react-router-dom";

const InsertDataFormulaPage = () => {
    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    if(!userInfo) {
        history.push('/')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllFormula())
    }, [])
    const {formulaAll, loading} = useSelector(state => state.formulaAll)
    return (
        <>
            {
                !loading ? <FormulaComponents formulaAll={formulaAll}/> : <div>Loading....</div>
            }
        </>
    )
}

export default InsertDataFormulaPage
