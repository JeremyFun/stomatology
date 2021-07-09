import React, {useEffect, useState} from "react"
import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import InsertDataCustomerPage from "./pages/InsertDataCustomerPage";
import {useDispatch} from "react-redux";
import {getAllUsers} from "./actions/userActions";
import store from "./store";
import InsertDataTechnicPage from "./pages/InsertDataTechnicPage";
import FormRequestPage from "./pages/FormRequestPage";
import InsertDataServicesPage from "./pages/InsertDataServicesPage";
import InsertDataColorsPage from "./pages/InsertDataColorsPage";
import InsertDataFormulaPage from "./pages/InsertDataFormulaPage";
import InsertDataCountPage from "./pages/InsertDataCountPage";
import LoginPage from "./pages/LoginPage";
import InsertDataFormPage from "./pages/InsertDataFormPage";

const {Header, Sider, Content} = Layout;


const App = () => {
    const [collapsed, setCollapsed] = useState(false)

    let toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <BrowserRouter>
            <Layout>
                <Navbar collapsed={collapsed}/>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                        <Route path="/" exact>
                            <LoginPage />
                        </Route>  <Route path="/customer" exact>
                            <InsertDataCustomerPage />
                        </Route>
                        <Route path="/technic" exact>
                            <InsertDataTechnicPage />
                        </Route>
                        <Route path="/services" exact>
                            <InsertDataServicesPage />
                        </Route>
                        <Route path="/colors" exact>
                            <InsertDataColorsPage />
                        </Route>
                        <Route path="/formula" exact>
                            <InsertDataFormulaPage />
                        </Route>
                        <Route path="/count" exact>
                            <InsertDataCountPage />
                        </Route>
                        <Route path="/formRequest" exact>
                            <FormRequestPage />
                        </Route>
                        <Route path="/formTable" exact>
                            <InsertDataFormPage />
                        </Route>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}

export default App
