import { message } from 'antd';
import axios from 'axios';
import { PAYMENT_API, PAYMENT_REDIRECT } from '../../Constants/Apis';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

export const normalizeGameName = (gameName) => {
  return gameName.replace(' ', '-');
};

export const createTransactionToken = async (payload) => {
  try {
    const { data: transactionToken } = await axios.get(PAYMENT_API, { params: payload });

    return window.open(`${PAYMENT_REDIRECT}/${transactionToken}`);
  } catch (error) {
    return message.error(error?.message);
  }
};

export const handleNumberCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number) || 0;
};
