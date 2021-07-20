import React, {useEffect, useState} from "react"
import MaterialTable from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {addFormula} from "../actions/formulaActions";
import {addCount, deleteCount, updateCount} from "../actions/countActions";
import {deleteColors, updateColors} from "../actions/colorsActions";

function CountComponents({countAll}) {
    const [columns, setColumns] = useState([
        {title: 'ID', field: '_id', editable: 'never'},
        {title: 'Name', field: 'name'}
    ]);
    const dispatch = useDispatch()
    const [data, setData] = useState(countAll || []);
    return (
        <MaterialTable
            title="Кількість меню"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            debugger;
                            setData([...data, newData]);
                            dispatch(addCount(newData.name))
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            dispatch(updateCount(newData))
                            setData([...dataUpdate]);
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
                            dispatch(deleteCount(oldData._id))
                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}

export default CountComponents
