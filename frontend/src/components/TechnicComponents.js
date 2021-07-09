import React, {useEffect} from "react"
import MaterialTable from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, getAllCustomer} from "../actions/customerActions";
import {getAllUsers} from "../actions/userActions";
import {addTechnic} from "../actions/technicActions";

function TechnicComponents({technicAll}) {
    const {useState} = React;
    const [columns, setColumns] = useState([
        {title: 'ID', field: '_id', editable: 'never'},
        {title: 'Name', field: 'name'}
    ]);
    const dispatch = useDispatch()
    const [data, setData] = useState(technicAll || []);
    return (
        <MaterialTable
            title="Технік меню"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            debugger;
                            setData([...data, newData]);
                            dispatch(addTechnic(newData.name))
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

                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}

export default TechnicComponents
