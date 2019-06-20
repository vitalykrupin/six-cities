const initialState = {
  isAuthenticated: false,
  pendingAuthorization: true,
  user: {},
};

const ActionType = {
  PENDING_AUTHORIZATION: `PENDING_AUTHORIZATION`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOGIN: `LOGIN`,
};

const ActionCreator = ({
  pendingAuthorization: (status) => ({
    type: ActionType.PENDING_AUTHORIZATION,
    payload: status,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  login: (user) => ({
    type: ActionType.LOGIN,
    payload: user,
  })
});

const Operation = {
  login: (data) => (dispatch, getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.login(response.data));
          dispatch(ActionCreator.requireAuthorization(true));
        }
      })
      .finally(() => {
        dispatch(ActionCreator.pendingAuthorization(false));
      });
  },

  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.requireAuthorization(true));
          dispatch(ActionCreator.login(response.data));
        }
      })
      .finally(() => {
        dispatch(ActionCreator.pendingAuthorization(false));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthenticated: action.payload,
      });
    case ActionType.LOGIN:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case ActionType.PENDING_AUTHORIZATION:
      return Object.assign({}, state, {
        pendingAuthorization: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation, ActionType};
