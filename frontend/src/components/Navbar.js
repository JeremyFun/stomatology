import React from "react";
import {Layout, Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

const { Sider } = Layout;

const Navbar = ({collapsed}) => {
    return <>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['7']}>
                <Menu.Item key="7" icon={<VideoCameraOutlined />}>
                    <NavLink to="/formRequest">
                        FormRequest
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/customer">
                        Customer
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <NavLink to="/technic">
                        Technic
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                    <NavLink to="/services">
                        Services
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                    <NavLink to="/colors">
                        Colors
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5" icon={<VideoCameraOutlined />}>
                    <NavLink to="/formula">
                        Матеріал
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="6" icon={<VideoCameraOutlined />}>
                    <NavLink to="/count">
                        Count
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="8" icon={<VideoCameraOutlined />}>
                    <NavLink to="/formTable">
                        FormTable
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    </>
}

export default Navbar
