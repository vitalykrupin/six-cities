const initialState = {
  fetchedOffers: []
};

const actionsType = {
  FETCH_OFFERS: `FETCH_OFFERS`
};

const ActionCreators = {
  fetchOffers: (offers) => ({
    type: `FETCH_OFFERS`,
    payload: offers
  })
};

const Operations = {
  fetchOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreators.fetchOffers(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.FETCH_OFFERS: return Object.assign({}, state, {
      fetchedOffers: action.payload
    });
  }

  return state;
};

export {reducer, ActionCreators, Operations, actionsType};
