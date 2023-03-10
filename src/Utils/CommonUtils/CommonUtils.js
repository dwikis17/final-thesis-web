import { message } from 'antd';
import axios from 'axios';
import { head } from 'lodash';
import {
  FETCH_ALL_GAMES_API,
  PAYMENT_API, PAYMENT_REDIRECT, SIGN_IN_API, UPDATE_TRANSACTION_API, GET_DENOMINATION_LIST
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

export const createNewGame = async (payload, history) => {
  const headerParams = { ...headers() };
  try {
    const { data: { _id } } = await axios.post(FETCH_ALL_GAMES_API, payload, headerParams);
    return history.push(`/admin/game-detail/${_id}`);
  } catch (e) {
    return message.error('something went wrong');
  }
};

export const updateGame = async (payload, id) => {
  const headerParams = { ...headers() };
  try {
    return axios.put(`${FETCH_ALL_GAMES_API}/${id}`, payload, headerParams);
  } catch (e) {
    return message.error('something went wrong');
  }
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

export const deleteDenominationById = async (id) => {
  const headerParams = {
    ...headers()
  };
  return axios.delete(`${GET_DENOMINATION_LIST}/${id}`, headerParams);
};
