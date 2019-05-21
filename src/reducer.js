const initialState = {
  city: `Amsterdam`,
  offers: require(`./mocks/offers`).offers
};

const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: `CHANGE_CITY`,
    payload: selectedCity
  })
};

const reducer = (state = initialState, action) => {
  if (action.type === `CHANGE_CITY`) {
    return Object.assign({}, state, {
      city: action.payload
    });
  }
  return state;
};

export {reducer, ActionCreator};
