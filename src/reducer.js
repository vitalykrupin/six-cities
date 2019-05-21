const initialState = {
  city: `Amsterdam`,
  offers: require(`./mocks/offers`).offers
};

const getOffersOfCity = (selectedCity, offers) => offers.filter((it) => it.city.name === selectedCity);

const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: `CHANGE_CITY`,
    payload: selectedCity
  }),
  fetchOffers: (selectedCity, offers) => {
    const fetchOffers = getOffersOfCity(selectedCity, offers);

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
  // if (action.type === `CHANGE_CITY`) {
  //   return Object.assign({}, state, {
  //     city: action.payload
  //   });
  // }
  // return state;
};

export {reducer, ActionCreator};
