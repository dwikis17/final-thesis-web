import axios from 'axios';
import { GET_DENOMINATION_LIST } from '../Constants/Apis';
import { headers } from '../Utils/CommonUtils/CommonUtils';

export const createNewDenomination = (payload) => {
  const headerParams = { ...headers() };
  console.log(headerParams);
  return axios.post(GET_DENOMINATION_LIST, payload, headerParams);
};
