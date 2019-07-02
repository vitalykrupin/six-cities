import axios from 'axios';
import {RequestStatus, Settings} from './constants';

export const configureAPI = ((onLoginFail) => {
  const api = axios.create({
    baseURL: Settings.BASE_URL,
    timeout: Settings.SERVER_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.request.responseURL.indexOf(`/login`) === -1 && error.response.status === RequestStatus.FORBIDDEN) {
      onLoginFail();
      return;
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
});
