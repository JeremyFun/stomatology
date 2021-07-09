import React, {useEffect, useState} from "react";
import {Tabs} from 'antd';
import CustomerComponents from "../components/CustomerComponents";
import {useDispatch, useSelector} from "react-redux";
import {getAllCustomer} from "../actions/customerActions";
import {getAllTechnic} from "../actions/technicActions";
import TechnicComponents from "../components/TechnicComponents";
import ColorsComponents from "../components/ColorsComponents";
import {getAllColors} from "../actions/colorsActions";
import {useHistory} from "react-router-dom";

const InsertDataColorsPage = () => {
    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    if(!userInfo) {
        history.push('/')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllColors())
    }, [])
    const {colorsAll, loading} = useSelector(state => state.colorsAll)
    return (
        <>
            {
                !loading ? <ColorsComponents colorsAll={colorsAll}/> : <div>Loading....</div>
            }
        </>
    )
}

export default InsertDataColorsPage
