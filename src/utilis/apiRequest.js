import axios from 'axios';
import { useState } from 'react';
const baseURL = process.env.REACT_APP_SERVER_URL

export const useRequest = (path, method = 'get', rowResponse = false) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(null);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token')
  const runRequest = async ({
    body,
    path: requestPath,
    method: requestMethod,
    params,
  } = {}) => {
    setError(null);
    setIsLoading(true);
    const requestedMethod = requestMethod || method;
    const url = `${baseURL}${requestPath || path}`;
    return new Promise(async (resolve, reject) => {
      try {
        const config={
          method: requestedMethod,
          url,
          data: body,
          headers: {
            'Content-Type': 'application/json',
            'authorization':`Bearer ${token}`
          },
          params,
        }
        const res = await axios(config);
        setState(res.data);
        resolve(res.data);
      } catch (error) {
        const { response, message } = error;
        let resError;
        if (typeof response?.data === 'object') {
          resError = response.data.error || response.data.message;
        } else {
          resError = message;
          setError(resError);
          reject(rowResponse ? response : resError);
        }
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    });
  };
  return [runRequest, { state, isLoading, setState, error, setError }];
};
