import React, {useEffect, useState} from "react";
import {Tabs} from 'antd';
import CustomerComponents from "../components/CustomerComponents";
import {useDispatch, useSelector} from "react-redux";
import {getAllCustomer} from "../actions/customerActions";
import {useHistory} from "react-router-dom";

const InsertDataCustomerPage = () => {
    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    if(!userInfo) {
        history.push('/')
    }
    const dispatch = useDispatch()
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        dispatch(getAllCustomer())
    }, [])
    const {customerAll, loading} = useSelector(state => state.customerAll)
    return (
        <>
            {
                !loading ? <CustomerComponents customerAll={customerAll} /> : <div>Loading....</div>
            }
        </>
    )
}

export default InsertDataCustomerPage
