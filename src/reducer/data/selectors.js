import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

export const getIsReviewSending = (state) => {
  return state[NAME_SPACE].isReviewSending;
};

export const getDidReviewSent = (state) => {
  return state[NAME_SPACE].didReviewSent;
};

export const getError = (state) => {
  return state[NAME_SPACE].sendError;
};
