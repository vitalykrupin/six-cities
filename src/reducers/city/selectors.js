import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.CITY;


export const getCity = (state) => {
  return state[NAME_SPACE].activeCity;
};
