export const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

export const PlaceType = {
  house: `House`,
  hotel: `Hotel`,
  apartment: `Apartment`,
  room: `Private Room`,
};

export const redirectToUrl = (url, history) => history.push(url);
