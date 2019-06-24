import axios from 'axios';

export const configureAPI = ((onLoginFail) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.request.responseURL.indexOf(`/login`) === -1 && error.response.status === 403) {
      onLoginFail();
      return;
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
});
