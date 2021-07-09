import React, {useEffect} from "react"
import MaterialTable from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, getAllCustomer} from "../actions/customerActions";
import {getAllUsers} from "../actions/userActions";

function FormComponents({formAll}) {
    const {useState} = React;
    const [columns, setColumns] = useState([
        {title: 'ID', field: 'id'},
        {title: 'Колір', field: 'colors'},
        {title: 'Кількість', field: 'count'},
        {title: 'Замовник', field: 'costumer'},
        {title: 'Матеріал', field: 'formula'},
        {title: 'Технік', field: 'technic'},
        {title: 'Опис техніка', field: 'introduction'},
        {title: 'Формула', field: 'pacient'},
        {title: 'Сервіси', field: 'services'},
        {title: 'Час', field: 'time'},
    ]);
    const dispatch = useDispatch()
    const [data, setData] = useState(formAll || []);
    return (
        <MaterialTable
            title="Таблиць замовлень"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            debugger;
                            setData([...data, newData]);
                            // dispatch(addCustomer(newData.name))
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

export default FormComponents
