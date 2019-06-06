import {reducer} from './user.js';

it(`checks initialstate of user reducer`, () => {
  expect(reducer(undefined, {})).toEqual({
    isAuthRequired: false
  });
});

it(`checks state of user reducer`, () => {
  expect(reducer({
    isAuthRequired: true
  }, {
    type: `REQUIRED_AUTH`,
    payload: false
  })).toEqual({
    isAuthRequired: false
  });
});
