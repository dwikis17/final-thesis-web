/* eslint-disable class-methods-use-this */
import {
  Button, Form, Input, message,
} from 'antd';
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios
  from 'axios';
import { VERIFY_TOKEN_API } from '../../../Constants/Apis';
import { doSignIn, getToken } from '../../../Utils/CommonUtils/CommonUtils';
import Header from '../../Header/Header';
import { HTTP_STATUS_OK } from '../../../Constants/HttpStatusConstants';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    console.log(window.location.pathname, 'ss');
    await this.authenticateToken(history);
  }

  async onFinishFailed(errorInfo) {
    return message.error(errorInfo?.errorFields[0]?.errors);
  }

  authenticateToken = async (history) => {
    try {
      const token = getToken();
      const data = await axios.get(`${VERIFY_TOKEN_API}/${token}`);
      const dateIsExpired = Date.now() >= data.data.decodedToken.exp * 1000;
      const verifyFail = data.status !== HTTP_STATUS_OK;
      if (verifyFail || dateIsExpired) {
        localStorage.clear();
        return this.setState({
          authenticated: false
        });
      }

      this.setState({
        authenticated: true
      });

      return history.push('/admin');
    } catch (e) {
      localStorage.clear();
      return this.setState({
        authenticated: false
      });
    }
  };

  onFinish = async (values) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { history } = this.props;
    try {
      const data = await doSignIn(values, history);
      window.localStorage.setItem('token', data?.data?.accessToken);
      return history.push({ pathname: '/admin/dashboard', state: { auth: true } });
    } catch (error) {
      return message.error(error?.response?.data?.msg);
    }
  };

  render() {
    const { authenticated } = this.state;
    return (
      <div className="container justify-items-center grid">
        <Header />
        <h1 className=" text-4xl text-white mt-10">Sign In  </h1>
        <div className="sign-in-form border w-full sm:w-1/4 mt-6  grid justify-items-center p-10 bg-white rounded-xl ">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className="bg-green-600">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="grid w-full borde gap-0 justify-items-center" />
      </div>
    );
  }
}

export default SignInPage;
