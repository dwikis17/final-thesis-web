import { useState, useEffect } from 'react';
import axios from 'axios';
import { head } from 'lodash';
import { headers } from './CommonUtils';

export const useAxios = (url, params, history) => {
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [reFetch, setRefetch] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);

  const callReFetch = () => {
    setLoading(!loading);
    setRefetch(!reFetch);
  };

  useEffect(() => {
    const header = {
      params, ...headers()
    };
    (async () => {
      try {
        const response = await axios.get(url, header);
        if (!response.data) {
          return history.push('/');
        }
        setFetchedData(response);
        setErrorResponse(false);
        return setLoading(false);
      } catch (error) {
        setErrorResponse(true);
        return setLoading(false);
      }
    })();
  }, [reFetch]);

  return {
    fetchedData, errorResponse, loading, callReFetch,
  };
};
