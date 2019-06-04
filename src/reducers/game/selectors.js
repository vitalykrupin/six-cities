import NameSpace from '../name-spaces.js';

const NAME_SPACE = NameSpace.GAME;


export const getCity = (state) => {
  return state[NAME_SPACE].activeCity;
};
