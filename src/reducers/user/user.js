const initialState = {
  isAuthRequired: false
};

const actionsType = {
  REQUIRED_AUTH: `REQUIRED_AUTH`
};

const ActionCreators = {
  requireAuth: (status) => {
    return {
      type: actionsType.REQUIRED_AUTH,
      payload: status,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.REQUIRED_AUTH: return Object.assign({}, state, {
      isAuthRequired: action.payload,
    });
  }
  return state;
};

export {reducer, ActionCreators, actionsType};
