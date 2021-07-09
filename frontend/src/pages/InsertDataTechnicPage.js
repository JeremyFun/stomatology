import React, {useEffect, useState} from "react";
import {Tabs} from 'antd';
import CustomerComponents from "../components/CustomerComponents";
import {useDispatch, useSelector} from "react-redux";
import {getAllCustomer} from "../actions/customerActions";
import {getAllTechnic} from "../actions/technicActions";
import TechnicComponents from "../components/TechnicComponents";
import {useHistory} from "react-router-dom";

const InsertDataTechnicPage = () => {
    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    if(!userInfo) {
        history.push('/')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTechnic())
    }, [])
    const {technicAll, loading} = useSelector(state => state.technicAll)
    return (
        <>
            {
                !loading ? <TechnicComponents technicAll={technicAll}/> : <div>Loading....</div>
            }
        </>
    )
}

export default InsertDataTechnicPage
