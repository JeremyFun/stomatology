import React, {useEffect, useState} from "react"
import MaterialTable from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {addFormula, deleteFormula, updateFormula} from "../actions/formulaActions";
import {deleteColors, updateColors} from "../actions/colorsActions";

function FormulaComponents({formulaAll}) {
    const [columns, setColumns] = useState([
        {title: 'ID', field: '_id', editable: 'never'},
        {title: 'Name', field: 'name'}
    ]);
    const dispatch = useDispatch()
    const [data, setData] = useState(formulaAll || []);
    return (
        <MaterialTable
            title="Матеріал меню"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            debugger;
                            setData([...data, newData]);
                            dispatch(addFormula(newData.name))
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
                            dispatch(updateFormula(newData))
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
                            dispatch(deleteFormula(oldData._id))
                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}

export default FormulaComponents
