import {createSelector} from 'reselect';
import {NameSpace} from '../namespaces';
import {SortType} from '../../utils';

const NAMESPACE = NameSpace.DATA;
const MAX_CITIES = 6;

const sortCitiesByName = (offers) => {
  const cities = offers.map((offer) => offer.city).sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });

  return cities.reduce((prev, current) => {
    if (!prev.includes(current)) {
      prev.push(current);
    }
    return prev;
  }, []);
};

const getUnicCities = (arr) => {
  const unicCities = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i].name !== arr[i - 1].name) {
      unicCities.push(arr[i]);
    }
  }

  return unicCities;
};

const getRandomCityOffer = (offers) => {
  const min = 0;
  const max = Math.floor(offers.length);
  return offers[Math.floor(Math.random() * (max - min)) + min];
};

export const sortFavoritesListByCities = (offers) => {
  const cities = {};

  offers.forEach((item) => {
    if (!cities[item.city.name]) {
      cities[item.city.name] = [];
    }
  });

  offers.forEach((item) => {
    const key = item.city.name;
    if (cities[key]) {
      cities[key].push(item);
    }
  });

  return cities;
};

export const getOffers = (state) => {
  return state[NAMESPACE].rentalOffers;
};

export const getCurrentCity = (state) => {
  return state[NAMESPACE].currentCity;
};

export const getSortValue = (state) => {
  return state[NAMESPACE].sortValue;
};

export const getOffersLoadStatus = (state) => {
  return state[NAMESPACE].offersLoaded;
};

export const getCities = createSelector(
    [getOffers],
    (offers) => getUnicCities(sortCitiesByName(offers)).slice(0, MAX_CITIES)
);

export const getCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city.name)
);

export const getRandomOffer = createSelector(
    [getOffers],
    (state) => getRandomCityOffer(state)
);

export const sortOffers = createSelector(
    getCityOffers,
    getSortValue,
    (offers, state) => {
      switch (state) {
        case (SortType.HIGH_TO_LOW):
          return offers.sort((a, b) => b.price - a.price);
        case (SortType.LOW_TO_HIGH):
          return offers.sort((a, b) => a.price - b.price);
        case (SortType.TOP_RATED):
          return offers.sort((a, b) => b.rating - a.rating);
        default:
          return offers.sort((a, b) => a.id - b.id);
      }
    }
);

export const getOfferById = (state, id) =>
  getOffers(state).filter((item) => item.id === +id)[0];

export const getCloserOffers = (state, id) => {
  const offer = getOfferById(state, id);

  return getOffers(state)
    .filter((item) => item.city.name === offer.city.name)
    .filter((item) => item.id !== +id);
};

export const getFavoriteOffers = (state) =>
  getOffers(state).filter((item) => item.is_favorite);
