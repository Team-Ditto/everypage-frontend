import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { LOCAL_BASE_URL, REQUEST_TIMEOUT } from './api-config';

axiosRequest = axios.create({
  baseURL: LOCAL_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  // commented for now! will enable later
  //   paramsSerializer: params => (params ? qs.stringify(params, { arrayFormat: 'repeat' }) : {}),
});

axiosRequest.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('access_token');

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosRequest;
