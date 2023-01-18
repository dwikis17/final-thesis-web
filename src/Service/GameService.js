import axios from 'axios';
import { UPDATE_GAME_STATUS } from '../Constants/Apis';
import { headers } from '../Utils/CommonUtils/CommonUtils';

export const unlistGame = (id, status) => {
  const headerParams = {
    ...headers()
  };
  const payload = { id, status };

  return axios.put(UPDATE_GAME_STATUS, payload, headerParams);
};
