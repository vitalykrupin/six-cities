const initialState = {
  activeCity: {
    "name": `Brussels`,
    "location": {"latitude": 50.846557, "longitude": 4.351697, "zoom": 13}
  },
  cities: []
};

const actionsType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_ACTIVE_CITY: `GET_ACTIVE_CITY`
};

const ActionCreators = {
  getActiveCity: (city) => ({
    type: `GET_ACTIVE_CITY`,
    payload: city,
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_ACTIVE_CITY: return Object.assign({}, state, {
      activeCity: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreators, actionsType};
