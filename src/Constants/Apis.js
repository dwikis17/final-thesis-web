const baseUrl = 'http://localhost:80/api';

export const VERIFY_TOKEN_API = `${baseUrl}/user/verify`;
export const FETCH_ALL_GAMES_API = `${baseUrl}/game`;
export const PAYMENT_API = `${baseUrl}/transaction`;
export const GET_TRANSACTION_BY_ORDER_ID = `${baseUrl}/transaction/get-transaction`;
export const PAYMENT_REDIRECT = 'https://app.sandbox.midtrans.com/snap/v2/vtweb';
