import React, {useEffect} from "react"
import MaterialTable from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, deleteCustomer, getAllCustomer, updateCustomer} from "../actions/customerActions";
import {getAllUsers} from "../actions/userActions";
import {deleteColors, updateColors} from "../actions/colorsActions";

function CustomerComponents({customerAll}) {
    const {useState} = React;
    const [columns, setColumns] = useState([
        {title: 'ID', field: '_id', editable: 'never'},
        {title: 'Name', field: 'name'},
        {title: 'Phone', field: 'phone'},
        {title: 'Novaposhta', field: 'novaposhta'},

    ]);
    const dispatch = useDispatch()
    const [data, setData] = useState(customerAll || []);
    return (
        <MaterialTable
            title="Замовник меню"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            debugger;
                            setData([...data, newData]);
                            dispatch(addCustomer(newData.name, newData.phone, newData.novaposhta))
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);
                            dispatch(updateCustomer(newData))
                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);
                            dispatch(deleteCustomer(oldData._id))
                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}

export default CustomerComponents
