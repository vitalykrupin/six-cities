import {adapter} from './adapter';

const initialState = {
  fetchedOffers: []
};

const actionsType = {
  FETCH_OFFERS: `FETCH_OFFERS`
};

const ActionCreator = {
  fetchOffers: (offers) => ({
    type: `FETCH_OFFERS`,
    payload: offers
  })
};

const Operations = {
  fetchOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.fetchOffers(adapter(response.data)));
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

export {reducer, ActionCreator, Operations, actionsType};
