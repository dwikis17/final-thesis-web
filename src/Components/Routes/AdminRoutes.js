import React, { Component } from 'react';
import {
  BrowserRouter, Redirect, Switch, Route
} from 'react-router-dom';
import axios from 'axios';
import { Layout, Menu, theme } from 'antd';
import './AdminRoutes.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { VERIFY_TOKEN_API } from '../../Constants/Apis';
import SignInPage from '../Pages/SignInPage/SignInPage';
import { getToken } from '../../Utils/CommonUtils/CommonUtils';
import { HTTP_STATUS_OK } from '../../Constants/HttpStatusConstants';
import AuthenticatedPage from '../Pages/AuthenticatedPage/AuthenticatedPage';

const {
  Header, Content, Footer, Sider
} = Layout;

class AdminRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      name: '',
      email: ''
    };
  }

  async componentDidMount() {
    const { authenticated } = this.state;
    const { history } = this.props;

    await this.authenticateToken(history);
  }

  authenticateToken = async (history) => {
    try {
      const token = getToken();
      const data = await axios.get(`${VERIFY_TOKEN_API}/${token}`);
      const dateIsExpired = Date.now() >= data.data.decodedToken.exp * 1000;
      const verifyFail = data.status !== HTTP_STATUS_OK;
      if (verifyFail || dateIsExpired) {
        localStorage.clear();
        this.setState({
          authenticated: false,
          email: data?.data?.decodedToken?.email,
          name: data?.data?.decodedToken?.name
        });
        return history.push('/login');
      }

      return this.setState({
        authenticated: true,
        email: data?.data?.decodedToken?.email,
        name: data?.data?.decodedToken?.name
      });
    } catch (e) {
      localStorage.clear();
      this.setState({
        authenticated: false
      });
      return history.push('/login');
    }
  };

  render() {
    const { authenticated, name, email } = this.state;
    const { history } = this.props;
    return authenticated ? (
      <div className="relative">
        <div className="routes-container w-100 h-full border mb-10">
          <Layout>
            <Header style={{
              position: 'sticky', top: 0, zIndex: 1, width: '100%'
            }}
            >
              <div
                style={{
                  float: 'left',
                  width: 120,
                  height: 31,
                  margin: '16px 24px 16px 0',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              />
              <Menu
                theme="dark"
                mode="horizontal"
                onClick={(values) => history.push(`${values.key}`)}
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '/admin/dashboard',
                    icon: <UserOutlined />,
                    label: 'Dashboard',
                  },
                  {
                    key: '/admin/transaction',
                    icon: <UserOutlined />,
                    label: 'Transaction',
                  },
                  {
                    key: '/admin/games',
                    icon: <UserOutlined />,
                    label: 'Games Management',
                  },
                ]}
              />
            </Header>
          </Layout>
        </div>
        <div className="content  w-3/4 m-auto p-10">
          <AuthenticatedPage history={history} userData={this.state} />
        </div>
      </div>
    ) : null;
  }
}

export default AdminRoutes;
