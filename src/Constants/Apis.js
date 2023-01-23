const baseUrl = 'https://mern-thesis.herokuapp.com/api';

export const VERIFY_TOKEN_API = `${baseUrl}/admin/verify`;
export const FETCH_ALL_GAMES_API = `${baseUrl}/game`;
export const UPDATE_GAME_STATUS = `${baseUrl}/game/update-status`;
export const UPLOAD_GAME_IMAGE_API = `${baseUrl}/game/image/upload`;
export const SIGN_IN_API = `${baseUrl}/admin/sign-in`;
export const PAYMENT_API = `${baseUrl}/transaction`;
export const CHART_API = `${baseUrl}/transaction/chart`;
export const UPDATE_TRANSACTION_API = `${baseUrl}/transaction/update`;
export const FETCH_ALL_TRANSACTION_API = `${baseUrl}/transaction/transaction`;
export const GET_TRANSACTION_BY_ORDER_ID = `${baseUrl}/transaction/get-transaction`;
export const GET_DENOMINATION_LIST = `${baseUrl}/denomination`;
export const BANNER_API = `${baseUrl}/banner`;
export const BANNER_IMAGE = `${baseUrl}`;
export const PAYMENT_REDIRECT = 'https://app.sandbox.midtrans.com/snap/v2/vtweb';
