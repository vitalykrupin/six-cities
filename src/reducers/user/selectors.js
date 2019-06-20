import {NameSpace} from '../namespaces';

const NAMESPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAMESPACE].isAuthenticated;
};

export const getUser = (state) => {
  return state[NAMESPACE].user;
};

export const getPendingAuthStatus = (state) => {
  return state[NAMESPACE].pendingAuthorization;
};
