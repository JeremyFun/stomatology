import React, {useEffect} from 'react';
import {Form, Input, Select, Button, DatePicker, notification} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {getAllCustomer} from "../actions/customerActions";
import {getAllTechnic} from "../actions/technicActions";
import {getAllServices} from "../actions/servicesActions";
import {getAllColors} from "../actions/colorsActions";
import {getAllCount} from "../actions/countActions";
import {getAllFormula} from "../actions/formulaActions";
import {addForm, getAllForm} from "../actions/formActions";
import {useHistory} from "react-router-dom";

const FormRequestPage = () => {
    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    if(!userInfo) {
        history.push('/')
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCustomer())
        dispatch(getAllTechnic())
        dispatch(getAllServices())
        dispatch(getAllColors())
        dispatch(getAllCount())
        dispatch(getAllFormula())
        dispatch(getAllForm())
    }, [])

    const {customerAll} = useSelector(state => state.customerAll)
    const {technicAll} = useSelector(state => state.technicAll)
    const {servicesAll} = useSelector(state => state.servicesAll)
    const {colorsAll} = useSelector(state => state.colorsAll)
    const {formulaAll} = useSelector(state => state.formulaAll)
    const {countAll} = useSelector(state => state.countAll)
    const {formAll, loading} = useSelector(state => state.formAll)

    const onFinish = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'time': fieldsValue['time'].format('YYYY-MM-DD HH:mm:ss'),
        };
        dispatch(addForm(values.colors, values.count, values.customer, values.formula, values.introduction, values.pacient, values.services.toString(), values.technic, values.time, formAll.length + 1))
        if(formAll && !loading) {
            openNotification('Увага', 'Ви створили форму')
            history.push('/formTable')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        openNotification('Увага', 'Ви не правильно ввели дані')
    };
    const openNotification = (title, text) => {
        const args = {
            message: title,
            description:
            text,
        };
        notification.open(args);
    };



    const { Option } = Select;

    const children = [];
    if (servicesAll) {
        servicesAll.map(el => {
            return children.push(<Option key={el._id}>{el.name}</Option>)
        })
    }
    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Оберіть час',
            },
        ],
    };

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <Form
            name="basic"
            labelCol={{
                span: 4,
                offset: 4
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item name="time" label="Час" {...config}>
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Оберіть час"/>
            </Form.Item>
            <Form.Item
                name="customer"
                label="Замовник"
                rules={[
                    {
                        required: true,
                        message: 'Оберіть замовника',
                    },
                ]}
            >
                <Select placeholder="Оберіть замовника">
                    {
                        customerAll ? customerAll.map(el => {
                            return <Option key={el._id} value={el.name}>{el.name}</Option>
                        }) : ""
                    }
                </Select>
            </Form.Item>
            <Form.Item
                name="technic"
                label="Технік"
                rules={[
                    {
                        required: true,
                        message: 'Оберіть техніка',
                    },
                ]}
            >
                <Select placeholder="Оберіть техніка">
                    {
                        technicAll ? technicAll.map(el => {
                            return <Option key={el._id} value={el.name}>{el.name}</Option>
                        }) : ""
                    }
                </Select>
            </Form.Item>


            <Form.Item
                name="colors"
                label="Колір"
                rules={[
                    {
                        required: true,
                        message: 'Оберіть колір',
                    },
                ]}
            >
                <Select placeholder="Оберіть колір">
                    {
                        colorsAll ? colorsAll.map(el => {
                            return <Option key={el._id} value={el.name}>{el.name}</Option>
                        }) : ""
                    }
                </Select>
            </Form.Item>

            <Form.Item
                name="formula"
                label="Матеріал"
                rules={[
                    {
                        required: true,
                        message: 'Оберіть матеріал',
                    },
                ]}
            >
                <Select placeholder="Оберіть матеріал">
                    {
                        formulaAll ? formulaAll.map(el => {
                            return <Option key={el._id} value={el.name}>{el.name}</Option>
                        }) : ""
                    }
                </Select>
            </Form.Item>

            <Form.Item
                name="count"
                label="Кількість"
                rules={[
                    {
                        required: true,
                        message: 'Оберіть кількість',
                    },
                ]}
            >
                <Select placeholder="Оберіть кількість">
                    {
                        countAll ? countAll.map(el => {
                            return <Option key={el._id} value={el.name}>{el.name}</Option>
                        }) : ""
                    }
                </Select>
            </Form.Item>



            <Form.Item name="introduction" label="Коментар техніка">
                <Input.TextArea placeholder="Коментар техніка" />
            </Form.Item>
            <Form.Item name="pacient" label="Формула">
                <Input placeholder="Формула" />
            </Form.Item>
            <Form.Item
                name="services"
                label="Послуги"
                rules={[
                    {
                        required: true,
                        message: 'Оберіть послуги',
                    },
                ]}
            >
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Оберіть послуги"
                onChange={handleChange}
            >
                {
                    servicesAll ? servicesAll.map(el => {
                        return <Option key={el._id} value={el.name}>{el.name}</Option>
                    }) : ""
                }
            </Select>
        </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Відправити
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormRequestPage
