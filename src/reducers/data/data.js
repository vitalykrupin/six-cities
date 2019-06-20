import {SortType} from '../../utils';

const initialState = {
  rentalOffers: [],
  currentCity: {},
  offersLoaded: false,
  sortValue: SortType.POPULAR,
};

const ActionType = {
  OFFERS_LOADED: `OFFERS_LOADED`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_OFFER: `UPDATE_OFFER`,
  SORT_OFFERS: `SORT_OFFERS`,
};

const ActionCreator = {
  offersLoaded: (status) => ({
    type: ActionType.OFFERS_LOADED,
    payload: status,
  }),

  loadOffers: (rentalOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: rentalOffers,
  }),

  changeCity: (currentCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: currentCity,
  }),

  updateOffer: (offer) => ({
    type: ActionType.UPDATE_OFFER,
    payload: offer,
  }),

  sortOffers: (sortValue) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortValue,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        dispatch(ActionCreator.offersLoaded(true));
      })
      .catch((error) => {
        throw error;
      });
  },

  changeFavorites: (offer) => (dispatch, getState, api) => {
    const id = offer.id;
    const status = offer.is_favorite ? `0` : `1`;
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        dispatch(ActionCreator.updateOffer(response.data));
      })
      .catch((error) => {
        throw error;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        rentalOffers: action.payload,
      });

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        currentCity: action.payload,
      });

    case ActionType.OFFERS_LOADED:
      return Object.assign({}, state, {
        offersLoaded: action.payload,
      });

    case ActionType.SORT_OFFERS:
      return Object.assign({}, state, {
        sortValue: action.payload,
      });

    case ActionType.UPDATE_OFFER:
      return Object.assign({}, state, {
        rentalOffers: state.rentalOffers.map((offer) => {
          if (offer.id === action.payload.id) {
            return action.payload;
          }
          return offer;
        })
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
