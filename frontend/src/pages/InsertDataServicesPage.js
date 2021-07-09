import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ServicesComponents from "../components/ServicesComponents";
import {getAllServices} from "../actions/servicesActions";
import {useHistory} from "react-router-dom";

const InsertDataServicesPage = () => {
    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    if(!userInfo) {
        history.push('/')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllServices())
    }, [])
    const {servicesAll, loading} = useSelector(state => state.servicesAll)
    return (
        <>
            {
                !loading ? <ServicesComponents servicesAll={servicesAll}/> : <div>Loading....</div>
            }
        </>
    )
}

export default InsertDataServicesPage
