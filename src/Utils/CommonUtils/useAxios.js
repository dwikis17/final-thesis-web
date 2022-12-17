import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url, params) => {
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
      params,
    };

    (async () => {
      try {
        const response = await axios.get(url, header);
        setFetchedData(response);
        setErrorResponse(false);
        setLoading(false);
      } catch (error) {
        setErrorResponse(true);
        setLoading(false);
      }
    })();
  }, [reFetch]);

  return {
    fetchedData, errorResponse, loading, callReFetch,
  };
};
