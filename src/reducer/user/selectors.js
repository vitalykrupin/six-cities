import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

export const getAuthError = (state) => {
  return state[NAME_SPACE].authError && state[NAME_SPACE].authError;
};

export const getUserData = (state) => {
  return state[NAME_SPACE].user;
};

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites;
};
