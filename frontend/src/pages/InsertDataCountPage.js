import React, {useEffect, useState} from "react";
import {Tabs} from 'antd';
import CustomerComponents from "../components/CustomerComponents";
import {useDispatch, useSelector} from "react-redux";
import {getAllCustomer} from "../actions/customerActions";
import {getAllTechnic} from "../actions/technicActions";
import TechnicComponents from "../components/TechnicComponents";
import {getAllCount} from "../actions/countActions";
import CountComponents from "../components/CountComponents";
import {useHistory} from "react-router-dom";

const InsertDataCountPage = () => {
    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    if(!userInfo) {
        history.push('/')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCount())
    }, [])
    const {countAll, loading} = useSelector(state => state.countAll)
    return (
        <>
            {
                !loading ? <CountComponents countAll={countAll}/> : <div>Loading....</div>
            }
        </>
    )
}

export default InsertDataCountPage
