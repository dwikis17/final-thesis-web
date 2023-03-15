import React, { useEffect } from 'react';
import {
  Button, Form, Input, message,
} from 'antd';
import axios from 'axios';
import { getToken } from '../../../Utils/CommonUtils/CommonUtils';
import Header from '../../Header/Header';

function SignUpPage({ history }) {
  useEffect(() => {
    if (getToken()) {
      history.push('/');
    }
  }, []);

  const onFinish = async (values) => {
    await axios.post('http://localhost:80/api/user/', values);
    return history.push('/login');
  };
  return (
    <div className="container justify-items-center grid">
      <Header />
      <h1 className=" text-4xl text-white mt-10">Sign Up  </h1>
      <div className="sign-in-form border w-full sm:w-1/4 mt-6  grid justify-items-center p-10 bg-white rounded-xl ">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
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
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div>
          Already have account ?
          {' '}
          <a href="/sign-in/" className="text-blue-600">Sign In</a>
        </div>
      </div>
      <div className="grid w-full borde gap-0 justify-items-center" />
    </div>
  );
}

SignUpPage.propTypes = {

};

export default SignUpPage;
