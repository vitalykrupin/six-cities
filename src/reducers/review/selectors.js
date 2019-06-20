import {NameSpace} from '../namespaces';

const NAMESPACE = NameSpace.REVIEWS;

export const getReviews = (state) => {
  return state[NAMESPACE].reviewsList;
};
