import React, {useEffect, useState} from "react"
import MaterialTable from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, getAllCustomer} from "../actions/customerActions";
import {getAllUsers} from "../actions/userActions";
import {addTechnic} from "../actions/technicActions";
import {addColors, deleteColors, updateColors} from "../actions/colorsActions";

function ColorsComponents({colorsAll}) {
    const [columns, setColumns] = useState([
        {title: 'ID', field: '_id', editable: 'never'},
        {title: 'Name', field: 'name'}
    ]);
    const dispatch = useDispatch()
    const [data, setData] = useState(colorsAll || []);
    return (
        <MaterialTable
            title="Колір меню"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            debugger;
                            setData([...data, newData]);
                            dispatch(addColors(newData.name))
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            debugger
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            dispatch(updateColors(newData))
                            setData([...dataUpdate]);
                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            debugger
                            dispatch(deleteColors(oldData._id))
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}

export default ColorsComponents
