import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;


export const getOffers = (state) => {
  return state[NAME_SPACE].fetchedOffers;
};
