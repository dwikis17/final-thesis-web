const baseUrl = 'http://localhost:80/api';

export const VERIFY_TOKEN_API = `${baseUrl}/admin/verify`;
export const FETCH_ALL_GAMES_API = `${baseUrl}/game`;
export const SIGN_IN_API = `${baseUrl}/admin/sign-in`;
export const PAYMENT_API = `${baseUrl}/transaction`;
export const UPDATE_TRANSACTION_API = `${baseUrl}/transaction/update`;
export const FETCH_ALL_TRANSACTION_API = `${baseUrl}/transaction/transaction`;
export const GET_TRANSACTION_BY_ORDER_ID = `${baseUrl}/transaction/get-transaction`;
export const PAYMENT_REDIRECT = 'https://app.sandbox.midtrans.com/snap/v2/vtweb';
