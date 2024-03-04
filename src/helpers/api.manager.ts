import axios, { InternalAxiosRequestConfig } from 'axios';

import { configuration } from '../constants/config';


const api = axios.create({
  baseURL: configuration.API_URL,
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: any) => Promise.reject(err)
);
api.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (err: any) => {
    if (!err.response) {
      console.error('HTTP_ERROR', 'network error!');
      return Promise.reject(err);
    }
    console.error('HTTP_ERROR', err.response?.data || err.message);
    return Promise.reject(err);
  }
);
export default api;
