const initialState = {
  city: `Amsterdam`,
  offers: require(`./mocks/offers`).offers
};

const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: `CHANGE_CITY`,
    payload: selectedCity
  }),
  fetchOffers: (selectedCity, offers) => {
    const fetchOffers = offers.filter((it) => it.city.name === selectedCity);

    return {
      type: `FETCH_OFFERS`,
      payload: fetchOffers
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return Object.assign({}, state, {
      city: action.payload
    });
    case `FETCH_OFFERS`: return Object.assign({}, state, {
      offers: action.payload
    });
  }
  return state;
};

export {reducer, ActionCreator, initialState};
