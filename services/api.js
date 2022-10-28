import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import qs from 'qs';

import { LOCAL_BASE_URL, REQUEST_TIMEOUT } from './api-config';

let token = '';
AsyncStorage.getItem('user_token').then(token => token);
console.log(token);

export default axiosRequest = axios.create({
  baseURL: LOCAL_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: { Authorization: `Bearer ${token}` },
  // commented for now! will enable later
  //   paramsSerializer: params => (params ? qs.stringify(params, { arrayFormat: 'repeat' }) : {}),
});
