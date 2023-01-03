import { message } from 'antd';
import axios from 'axios';
import {
  PAYMENT_API, PAYMENT_REDIRECT, SIGN_IN_API, UPDATE_TRANSACTION_API
} from '../../Constants/Apis';

export const getToken = () => {
  return localStorage.getItem('token');
};
export const headers = () => {
  return { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } };
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

export const normalizeGameName = (gameName) => {
  return gameName.replace(' ', '-');
};

export const createTransactionToken = async (payload, history) => {
  try {
    const { data: transactionToken } = await axios.get(PAYMENT_API, { params: payload });
    history.push({ pathname: '/checkout', state: { redirectUrl: transactionToken?.redirect_url } });
    return window.open(transactionToken?.redirect_url);
  } catch (error) {
    return message.error(error?.message);
  }
};

export const handleNumberCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number) || 0;
};

export const doSignIn = async (value, history) => {
  return axios.post(
    SIGN_IN_API,
    value,
  );
};

export const updateTransactionStatusToDone = async (orderId) => {
  const headerParams = {
    ...headers()
  };

  return axios.put(`${UPDATE_TRANSACTION_API}/${orderId}`, {}, headerParams);
};
